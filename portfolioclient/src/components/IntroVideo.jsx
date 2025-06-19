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
        <h3 className="intro-title">
          Welcome to My Portfolio
        </h3>
        <p className="intro-description">
          This video showcases my journey, my passion for engineering and development, and my new zeal to break into creativity with software engineering.
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
       
        <button 
          className="explore-button"
          onClick={handleExploreClick}
        >
          🚀 Explore further
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;