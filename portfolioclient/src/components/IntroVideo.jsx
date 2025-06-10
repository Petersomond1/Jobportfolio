import React, { useRef } from 'react';
import './IntroVideo.css';

const IntroVideo = ({ videoTransitioned }) => {
  const sectionVideoRef = useRef(null);

  const handleVideoError = () => {
    console.log('Introduction video failed to load');
  };

  const handleVideoLoaded = () => {
    console.log('Introduction video loaded successfully');
  };

  const handleExploreClick = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`intro-video-section ${videoTransitioned ? 'visible' : 'hidden'}`}
    >
      <div className="intro-video-header">
        <h2 className="intro-title">
          Welcome to My Portfolio
        </h2>
        <p className="intro-subtitle">
          Get to know me through this introduction video
        </p>
      </div>

      <div className="intro-video-container">
        <video 
          ref={sectionVideoRef}
          controls 
          autoPlay={videoTransitioned}
          muted
          className="intro-video"
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
        >
          <source src="/assets/dieties%20like%20eze-urukwu.mp4" type="video/mp4" />
          <source src="/assets/dieties like eze-urukwu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="intro-video-footer">
        <p className="intro-description">
          This video showcases my journey and passion for engineering and development.
        </p>
        <button 
          className="explore-button"
          onClick={handleExploreClick}
        >
          🚀 Explore My Work
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;