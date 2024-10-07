import React from 'react'
import './Hero.css'
import dark_arrow from '/src/assets/dark-arrow.png'

function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
               <h1> we ensure better education for the better world</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ea ipsum amet voluptates quis vitae, eos dolor odio architecto doloribus?</p>
              <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
            </div>
        </div>
    )
}

export default Hero
