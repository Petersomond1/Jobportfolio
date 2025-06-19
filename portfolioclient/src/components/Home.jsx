import React from 'react';
import './Home.css';

function Home() {
  return (
      <div className='home-container' id="home">
        <div className="welcome">
          <h3>Welcome!!</h3>
        </div>
        {/* <hr className="hr" /> */}
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
    
      <div className='home-bttn'>  <button className="bttn">Hire me</button> <p>||</p> <button className="bttn">Contact</button></div>
      <hr className="hr" style={{ marginTop: '25px', marginBottom: '25px' }} />
      </div>
  );
}
export default Home;
