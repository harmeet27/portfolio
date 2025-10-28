import React, { useState, useRef, useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './ReelView.css';

const ReelItem = ({ reel, isActive }) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(isActive);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgress = (currentTime, duration) => {
    if (duration) {
      setProgress((currentTime / duration) * 100);
    }
  };

  return (
    <div className="reel-item">
      {reel.videoSrc ? (
        <video
          ref={videoRef}
          src={reel.videoSrc}
          className="reel-video"
          loop
          playsInline
          muted={true}
          onTimeUpdate={() => {
            if (videoRef.current) {
              handleProgress(videoRef.current.currentTime, videoRef.current.duration);
            }
          }}
        />
      ) : (
        <div 
          className="reel-image" 
          style={{ backgroundImage: `url(${reel.imageSrc || '/images/default-project.jpg'})` }}
        />
      )}
      
      <div className="reel-overlay">
        <div className="reel-title">{reel.title}</div>
        <div className="reel-description">{reel.description}</div>
        
        <div className="reel-actions">
          <div className="reel-action-left">
            <button className="reel-action-button" onClick={togglePlayPause}>
              <span role="img" aria-label="play-pause">{isPlaying ? '⏸️' : '▶️'}</span>
            </button>
            <button className="reel-action-button">
              <span role="img" aria-label="like">❤️</span>
            </button>
            <button className="reel-action-button">
              <span role="img" aria-label="comment">💬</span>
            </button>
          </div>
          <div className="reel-action-right">
            <button className="reel-action-button">
              <span role="img" aria-label="share">🔗</span>
            </button>
          </div>
        </div>
        
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ReelItem;