import React, { useState, useRef, useEffect } from 'react';
import ReelItem from './ReelItem';
import './ReelView.css';

const ReelView = ({ reels }) => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const reelsContainerRef = useRef(null);

  // Handle scroll to update current reel index
  useEffect(() => {
    const handleScroll = () => {
      if (reelsContainerRef.current) {
        const scrollTop = reelsContainerRef.current.scrollTop;
        const reelHeight = reelsContainerRef.current.clientHeight;
        const newIndex = Math.round(scrollTop / reelHeight);
        
        if (newIndex !== currentReelIndex && newIndex >= 0 && newIndex < reels.length) {
          setCurrentReelIndex(newIndex);
        }
      }
    };

    const reelsContainer = reelsContainerRef.current;
    if (reelsContainer) {
      reelsContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (reelsContainer) {
        reelsContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentReelIndex, reels.length]);

  return (
    <div className="reels-scroll" ref={reelsContainerRef}>
      {reels.map((reel, index) => (
        <ReelItem 
          key={reel.id} 
          reel={reel} 
          isActive={index === currentReelIndex}
        />
      ))}
    </div>
  );
};

export default ReelView;