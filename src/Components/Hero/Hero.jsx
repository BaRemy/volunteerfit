import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero conatiner'>
      <div className="hero-text">
        <h1>Start your Volunteering Journey Today !</h1>
        <p>Discover the ideal volunteering role that 
            aligns with your interests and skills. Our platform 
            offers a wide range of opportunities that cater to various
             causes and needs.</p>
             <br /><br /><br /><br />
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
