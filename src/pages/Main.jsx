import React from 'react';
import Header from '../components/Header';

const Main = () => (
  <div className="main page">
    <Header />
    <div className="nav-buttons animate__animated animate__fadeInUp animate__delay-1s">
      <a href="#projects" className="button nav-button">
        Projects
      </a>
      <a href="#contact" className="button nav-button">
        Contact
      </a>
      <a href="" className="button cv-button">
        <ion-icon id="cv-icon" name="download-outline"></ion-icon>
        Resume
      </a>
    </div>
  </div>
);

export default Main;
