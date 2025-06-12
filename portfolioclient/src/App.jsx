import React, { useEffect, useState } from 'react';
import './App.css';

// Import the new modular components
import Navigation from './components/Navigation';
import TeaserVideo from './components/TeaserVideo';
import IntroVideo from './components/IntroVideo';
import MainContent from './components/MainContent';
import ContactFooter from './components/ContactFooter';


function App() {
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(true);
  const [videoTransitioned, setVideoTransitioned] = useState(false);

  useEffect(() => {
    // Listen for any click, scroll, or key press to transition the video
    const handleUserInteraction = () => {
      if (showFullscreenVideo) {
        setShowFullscreenVideo(false);
        setVideoTransitioned(true);
        // Remove the event listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
        document.removeEventListener('wheel', handleUserInteraction);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);
    document.addEventListener('wheel', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('wheel', handleUserInteraction);
    };
  }, [showFullscreenVideo]);

  return (
    <>
      {/* Navigation Component */}
      <Navigation />

      {/* Fullscreen Teaser Video Component */}
      <TeaserVideo 
        showFullscreenVideo={showFullscreenVideo} 
        onHideVideo={() => setShowFullscreenVideo(false)}
      />

      {/* Introduction Video Component */}
      <IntroVideo videoTransitioned={videoTransitioned} />
    
      {/* Main Content Component */}
      <MainContent videoTransitioned={videoTransitioned} />

      {/* Contact and Footer Component */}
      <ContactFooter />
    </>
  );
}

export default App;