import React, { useRef } from 'react';
import './TeaserVideo.css';

const TeaserVideo = ({ showFullscreenVideo, onHideVideo }) => {
  const fullscreenVideoRef = useRef(null);

  const handleVideoError = () => {
    console.log('Teaser video failed to load');
    setTimeout(() => onHideVideo(), 2000);
  };

  if (!showFullscreenVideo) return null;

  return (
    <div className="fullscreen-intro-overlay">
      <video 
        ref={fullscreenVideoRef}
        autoPlay 
        muted
        loop
        className="teaser-video"
        onError={handleVideoError}
      >
        <source src="/assets/wave%20hey%202.mp4" type="video/mp4" />
        <source src="/assets/wave hey 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="teaser-overlay-text">
        <p className="teaser-welcome">
          🎬 Welcome to My Portfolio
        </p>
        <p className="teaser-instruction">
          Click anywhere or scroll to continue...
        </p>
      </div>
    </div>
  );
};

export default TeaserVideo;