import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import {Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand icon" /> 
          </div>
          <p>collections</p>
          <p>for everybody</p>
        </div>
        <div className="hero-latest-btn">
          <ScrollLink 
            to="new-collections" 
            smooth={true} 
            duration={500} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            New Collections
            <img src={arrow_icon} alt="arrow icon" />
          </ScrollLink>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;