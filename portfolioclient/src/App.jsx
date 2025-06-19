import React, { useEffect, useState } from "react";
 import "./App.css";

// Import the new modular components
import Navigation from "./components/Navigation";
import TeaserVideo from "./components/TeaserVideo";
import IntroVideo from "./components/IntroVideo";
import MainContent from "./components/MainContent";
import ContactFooter from "./components/ContactFooter";
import Home from "./components/Home";
// import Book3d from "./components43d/Book3d";

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
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("keydown", handleUserInteraction);
        document.removeEventListener("scroll", handleUserInteraction);
        document.removeEventListener("wheel", handleUserInteraction);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("scroll", handleUserInteraction);
    document.addEventListener("wheel", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      document.removeEventListener("wheel", handleUserInteraction);
    };
  }, [showFullscreenVideo]);

  return (
    <>
    <section>
      {/* Navigation Component */}
      <Navigation />
      </section>

      {/* Fullscreen Teaser Video Component */}
      <TeaserVideo
        showFullscreenVideo={showFullscreenVideo}
        onHideVideo={() => setShowFullscreenVideo(false)}
      />
      <section>
      {/* Introduction Video Component */}
      <IntroVideo videoTransitioned={videoTransitioned} />
      </section>
      <section>
    {/* Home Section */}
    <Home videoTransitioned={videoTransitioned} />
      </section>
      <section 
      // className="container"
      >


      {/* Main Content Component */}
        <MainContent videoTransitioned={videoTransitioned} />
      </section>

      {/* 3d book */}
      {/* <Book3d/> */}

      {/* Contact and Footer Component */}
      <ContactFooter />
    </>
  );
}

export default App;
