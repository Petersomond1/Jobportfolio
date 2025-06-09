import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Cards from './Cards'; // Import the Cards component

function App() {
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(true);
  const [videoTransitioned, setVideoTransitioned] = useState(false);
  const fullscreenVideoRef = useRef(null);
  const sectionVideoRef = useRef(null);

  useEffect(() => {
    const menu = document.querySelector('#menu');
    const links = document.querySelector('.links');

    if (menu && links) {
      menu.addEventListener('click', () => {
        links.classList.toggle('show');
      });
    }

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
      {/* Fullscreen Teaser Video Overlay - First Video */}
      {showFullscreenVideo && (
        <div 
          className="fullscreen-intro-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            transition: 'opacity 0.8s ease-out'
          }}
        >
          <video 
            ref={fullscreenVideoRef}
            autoPlay 
            muted
            loop
            style={{
              maxWidth: '90%',
              maxHeight: '80%',
              width: 'auto',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 15px 40px rgba(0, 255, 157, 0.3)',
              border: '3px solid var(--primary-color)'
            }}
            onError={() => {
              console.log('Teaser video failed to load');
              setTimeout(() => setShowFullscreenVideo(false), 2000);
            }}
          >
            {/* First Video - Teaser/Opening */}
            <source src="/assets/wave%20hey%202.mp4" type="video/mp4" />
            <source src="/assets/wave hey 2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div style={{
            color: 'white',
            textAlign: 'center',
            marginTop: '30px',
            fontSize: '18px',
            opacity: 0.9,
            animation: 'pulse 2s infinite'
          }}>
            <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 'bold' }}>
              🎬 Welcome to My Portfolio
            </p>
            <p style={{ fontSize: '16px', opacity: 0.8 }}>
              Click anywhere or scroll to continue...
            </p>
          </div>
        </div>
      )}

      <nav>
        <a href="#" className="logo">
          <h1>Engr Mondayp</h1>
          <h3>Job Portfolio</h3>
        </a>

        <ul className="links">
          <li><a href="#home"><span style={{ marginLeft: "0px", marginBottom: '10px' }}>Home</span></a></li>
          <li><a href="#about"><span style={{ marginLeft: "25px" }}>About Mondayp</span></a></li>
          <li><a href="#techs-Services"><span style={{ marginLeft: "45px" }}>Services Techs & Video presentations</span></a></li>
          <li><a href="#portfolio-cards"><span style={{ marginLeft: "65px" }}>Skills Deck</span></a></li>
          <li><a href="#contact"><span style={{ marginLeft: "85px" }}>Contact Me</span></a></li>
        </ul>

        <i className="bx bx-menu-alt-right" id="menu"></i>
        <a href="#contact" className="btn">Contact</a>
      </nav>

      <br />

      {/* Main Introduction Video Section - Second Video */}
      <div 
        className="intro-video-section"
        style={{
          width: '100%',
          padding: '100px 10% 50px',
          backgroundColor: 'var(--second-background)',
          display: videoTransitioned ? 'block' : 'none',
          opacity: videoTransitioned ? 1 : 0,
          transition: 'opacity 1.5s ease-in',
          transform: videoTransitioned ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{ 
            color: 'var(--primary-color)', 
            fontSize: '3em',
            marginBottom: '15px',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Welcome to My Portfolio
          </h2>
          <p style={{ 
            color: 'white', 
            fontSize: '1.3em',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Get to know me through this introduction video
          </p>
        </div>

        <div className="intro-video-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <video 
            ref={sectionVideoRef}
            controls 
            autoPlay={videoTransitioned}
            muted
            style={{
              maxWidth: '900px',
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 20px 50px rgba(0, 255, 157, 0.25)',
              border: '3px solid var(--primary-color)',
              background: 'rgba(0, 0, 0, 0.2)'
            }}
            onError={() => {
              console.log('Introduction video failed to load');
            }}
            onLoadedData={() => {
              console.log('Introduction video loaded successfully');
            }}
          >
            {/* Second Video - Main Introduction */}
            <source src="/assets/dieties%20like%20eze-urukwu.mp4" type="video/mp4" />
            <source src="/assets/dieties like eze-urukwu.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{
          textAlign: 'center',
          color: 'white'
        }}>
          <p style={{ 
            fontSize: '1.2em', 
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            This video showcases my journey and passion for engineering and development.
          </p>
          <button 
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'black',
              padding: '15px 40px',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1.2em',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(0, 255, 157, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 157, 0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 5px 15px rgba(0, 255, 157, 0.3)';
            }}
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Explore My Work
          </button>
        </div>
      </div>

      <div className='content-body'>
        <section className="home" id="home">
          <div className="welcome">
            <h3>Welcome!!</h3>
          </div>
          <hr className="hr" />
          <img src="./assets/picturepax.jpg" alt="Profile" className="profile-image" />
          <h2><span className='name'>I'm</span> <span>Monday</span> </h2>
          <hr className="hr" />
          <div className='intro'>
            <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>"Mondayp" </big> is what friends like you call me</span></h3>
            <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Monday </big>is a Web Developer & a Mechanical Engineer,</span></h3>
            <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Monday</big> is based in Atlanta, GA, USA.</span></h3>
            <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Monday</big> is job ready !   </span></h3>
            <h3><span><big style={{ fontSize: '25px', fontWeight: 'bolder' }}>Monday</big> is prepared to work in any Software Engineering Position and is very enthusiastic to joining any developers team that's open to creating future in today's in-depth emerging software technologies and core-specialization.</span> </h3>
          </div>

          <div className='intro2'>
            <h3><span>And as you can see, this is just a job portfolio to showcase my prowess/proficency in this new carreir path with a glimpse of my coding skills and services using emerging Techs, and to create a point of contact for recruiters/employers or clients like you to reach me.</span></h3>
          </div>
          <div className="bttn">Hire me</div>
          <br />
          <hr className="hr" />
          <br />
          <div className="bttn">Contact</div>
        </section>

        <hr className="hr" style={{ marginTop: '25px', marginBottom: '25px' }} />
        
        {/* <section>
          <div className="techs-Services-container">
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div> 
          </div>
        </section> */}

        <hr className="hr" style={{ marginTop: '25px', marginBottom: '25px' }} />
        
        {/* Portfolio Cards Section - Now using the Cards component */}
        <Cards />

        <hr className="hr" style={{ marginTop: '25px', marginBottom: '25px' }} />
        
        <section>
          <div className="about-box" id="about">
            <div className="about-info">
              <h2><span>About Engr. Mondayp</span></h2>
            </div>
          
            <div className="skills-heading">
              <h3>Frontend Development Skills</h3>
            </div>

            <div className='skills'>
              <li><span><i className='bx bx-chevron-right'></i> HTML</span></li>
              <li><span><i className='bx bx-chevron-right'></i> JavaScript</span></li>
              <li><span><i className='bx bx-chevron-right'></i> React</span></li>
              <li><span><i className='bx bx-chevron-right'></i> CSS</span></li> 
              <li><span><i className='bx bx-chevron-right'></i> Bootstrap</span></li>
              <li><span><i className='bx bx-chevron-right'></i> Tailwind</span></li>
              <li><span><i className='bx bx-chevron-right'></i> Material-UI</span></li>
            </div>

            <div className="skills-heading">
              <h3>Backend Development Skills</h3>
            </div>

            <div className='skills'>
              <span><i className='bx bx-chevron-right'></i> Node.js </span>
              <span><i className='bx bx-chevron-right'></i> Express</span>
              <span><i className='bx bx-chevron-right'></i> MySQL</span>
              <span><i className='bx bx-chevron-right'></i> APIs</span> 
              <span><i className='bx bx-chevron-right'></i> MongoDB</span>
              <span><i className='bx bx-chevron-right'></i> AWS</span>
              <span><i className='bx bx-chevron-right'></i> Firebase</span>
            </div>

            <div className="skills-heading">
              <h3>FullStack Development Skills</h3>
            </div>

            <div className='skills'>
              <ul>
                <li><span><i className='bx bx-chevron-right'></i> GitHub</span></li> 
                <li><span><i className='bx bx-chevron-right'></i> Git</span></li> 
                <li><span><i className='bx bx-chevron-right'></i> Heroku</span></li>
                <li><span><i className='bx bx-chevron-right'></i> Netlify</span></li> 
              </ul>
              <ul> 
                <li><span><i className='bx bx-chevron-right'></i> Adobe XD</span></li> 
                <li><span><i className='bx bx-chevron-right'></i> Trello</span></li> 
                <li><span><i className='bx bx-chevron-right'></i> Slack</span></li> 
                <li><span><i className='bx bx-chevron-right'></i> Figma</span></li> 
              </ul>
            </div> 
            <img src="./assets/picturepax.jpg" alt="" className='about-image' />
          </div>
        </section>

        <section className="techs-Services" id="techs-Services">
          <h1 className='header'><span>Techs & Services</span></h1>
          <h3 className='skills-smallheader'><span> Links to Videos to Showcase use of skill </span></h3>
            
          <div className='skills'>
            <ul>
              <li><span><i className='bx bx-chevron-right'></i>React.js</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i>JavaScript</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i>HTML/CSS</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
            </ul>
            <ul>
              <li><span><i className='bx bx-chevron-right'></i>Tailwind</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i>BootStrap</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> Material-UI</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
            </ul>
            <ul>
              <li><span><i className='bx bx-chevron-right'></i>  Node.js</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> Express</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> MySQL</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
            </ul>
            <ul>
              <li><span><i className='bx bx-chevron-right'></i>  RESTful APIs</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> MongoDB</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> Firebase</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
            </ul>
            <ul>
              <li><span><i className='bx bx-chevron-right'></i>  GitHub</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i>Git</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> Figma</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
            </ul>
            <ul>
              <li><span><i className='bx bx-chevron-right'></i>  Hereku</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> Netlify</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
              <li><span><i className='bx bx-chevron-right'></i> Adobe XD</span></li>
              <p>abc</p><p>abc</p><p>abc</p>
            </ul>
          </div>

          <div className="techs-Services-container">
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
            <div className="box">
              <h1><span>Web Design</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam dolores natus fugit possimus quod commodi modi repudiandae et ipsum corporis blanditiis molestias deserunt eveniet quis, fugiat quidem? Dolorum, commodi?</p>
              <img src="./assets/pix.JPG" alt="" />
            </div>
          </div>
        </section>

        <section id="contact">
          <h1 className="header"><span>Contact</span></h1>
          <form action="#">
            <div className="input-box">
              <span>Full Name</span>
              <input type="text" placeholder='Enter Your Full Name'/>
            </div>
            <div className="input-box">
              <span>Email</span>
              <input type="email" placeholder='Enter Your Email'/>
            </div>
            <div className="input-box">
              <span>Message</span>
              <textarea placeholder='Enter Your Message'></textarea>
            </div>
            <div className="btttn">
              <input type="submit" value="Send"/>
            </div>
          </form>
        </section>

        <footer>
          <div className="col-left">
            <div className="col-box">
              <span>Mondayp</span>
              <span>4105 Hawkins street, Atlanta, GA, USA</span>
            </div>
            <div className="col-box">
              <span>work Phone</span>
              <span>+1 6784208200</span>
            </div>
            <div className="col-box">
              <span>Email</span>
              <span>
                <a href="mailto:petersomond@gmail.com">
                petersomond@gmail.com </a>
              </span>
            </div>
          </div>
          <div className="col-right"></div>
        </footer>
      </div>
    </>
  );
}

export default App;