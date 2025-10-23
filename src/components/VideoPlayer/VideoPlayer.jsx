import React, { useState, useRef, useEffect } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ src, poster, autoPlay = true }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const progressTimerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      if (autoPlay) {
        video.play().catch(error => {
          console.error("Video autoplay failed:", error);
          setIsPlaying(false);
        });
      }
      
      const updateProgress = () => {
        if (video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
        }
      };
      
      video.addEventListener('timeupdate', updateProgress);
      
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        if (progressTimerRef.current) {
          clearInterval(progressTimerRef.current);
        }
      };
    }
  }, [autoPlay]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
    
    // Show controls briefly when toggling play/pause
    setShowControls(true);
    setTimeout(() => setShowControls(false), 2000);
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;
    
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    
    video.currentTime = pos * video.duration;
    setProgress(pos * 100);
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  const handleDoubleClick = () => {
    // Show heart animation on double click (like Instagram)
    const heartElement = document.createElement('div');
    heartElement.className = 'heart-animation';
    heartElement.innerHTML = '❤️';
    videoRef.current.parentNode.appendChild(heartElement);
    
    setTimeout(() => {
      if (heartElement.parentNode) {
        heartElement.parentNode.removeChild(heartElement);
      }
    }, 1000);
  };

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        className="video-player"
        src={src}
        poster={poster}
        playsInline
        onClick={handleVideoClick}
        onDoubleClick={handleDoubleClick}
      />
      
      <div className={`video-controls ${showControls ? 'visible' : ''}`}>
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
      
      <div className="progress-container" onClick={handleProgressClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default VideoPlayer;