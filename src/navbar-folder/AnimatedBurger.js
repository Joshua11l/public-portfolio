// AnimatedBurger.js
import React from 'react';
import './AnimatedBurger.css';

const AnimatedBurger = ({ isOpen, toggle }) => {
  return (
    <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <div className="burger-line one"></div>
      <div className="burger-line two"></div>
      <div className="burger-line three"></div>
    </button>
  );
};

export default AnimatedBurger;