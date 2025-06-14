import React from 'react';
import Cards from './Cards';
import Book from './Book';
import './MainContent.css';
import '../App.css'; 

const MainContent = ({ videoTransitioned }) => {
  if (!videoTransitioned) return null;

  return (
    <div className='content-body'>
      {/* Home Section */}
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
      
      {/* Portfolio Cards Section */}
      <Cards />
      <hr className="hr" style={{ marginTop: '25px', marginBottom: '25px' }} />
      {/* <div className='container'> */}
      <Book/>
      {/* </div> */}

      <hr className="hr" style={{ marginTop: '25px', marginBottom: '25px' }} />
      
      {/* About Section */}
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

      {/* Techs & Services Section */}
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
    </div>
  );
};

export default MainContent;