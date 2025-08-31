import React from 'react';
import '../styles/About.css';
import { teamImages } from '../constant/peopleConstant';
import HeaderAbout from '../assets/header-bg.png'

const AboutUs = () => {
  return (
    <div className="platform-section">
        <div className="platform-text">
          <h2>Our platform was born from an agreement</h2>
          <p>
            Blue carbon projects can only thrive with resilient blockchain technology, just like the oceans we protect.
          </p>
        </div>
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            By promoting accountability and trust, we seek to drive significant global collaboration 
            and investment in blue carbon initiatives. Through this marketplace, we hope to unlock new opportunities 
            for environmental sustainability, empowering nations, businesses, and individuals to invest in the future of our oceans.
          </p>
        </div>
      </div>
  );
};

const ContainerAbout = () => {
  return (
    <div className='container-about'>
      <AboutUs />
    </div>
    
  );
};

function About() {
  return (
    <div className="about">
      <div className="gradient-circle"></div>
      <div className="HeaderAbout">
          <img src={HeaderAbout} alt="About Ocean Conservation" />
        </div>
      <div className="headerText">
        <p>
          We envision oceans as key in fighting climate change through blockchain, we create a transparent <br></br>marketplace for marine carbon credits, 
          driving investment in blue carbon projects and protecting ocean ecosystems.
        </p>
      </div>
      
      <ContainerAbout />

      <div className="team-section">
        <h1>The People Behind</h1>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamImages.Naufal} alt="Kalp Chaniyara" />
            <h3>Kalp Chaniyara</h3>
            <p>Project Lead</p>
          </div>
          <div className="team-member">
            <img src={teamImages.Irfan} alt="Dhruv Patel" />
            <h3>Dhruv Patel</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-member">
            <img src={teamImages.Damar} alt="Zeel Dadhaniya" />
            <h3>Zeel Dadhaniya</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-member">
            <img src={teamImages.John} alt="Aayush Goyal" />
            <h3>Aayush Goyal</h3>
            <p>Blockchain Researcher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
