import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id="home">
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Portfolio Page</h1>
      <p>Hello everyone!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--huge'
        >
          Hire Front End Engineer a
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
