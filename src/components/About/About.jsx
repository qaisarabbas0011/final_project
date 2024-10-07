import React from 'react'
import './About.css'
import about_img from '/src/assets/about.png'
import play_icon from '/src/assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel quas itaque quisquam libero temporibus. Numquam ipsum neque harum, maxime deserunt tempora id consequatur, nemo odit deleniti blanditiis, consequuntur debitis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel quas itaque quisquam libero temporibus. Numquam ipsum neque harum, maxime deserunt tempora id consequatur, nemo odit deleniti blanditiis, consequuntur debitis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel quas itaque quisquam libero temporibus. Numquam ipsum neque harum, maxime deserunt tempora id consequatur, nemo odit deleniti blanditiis, consequuntur debitis.</p>
            </div>
        </div>
    )
}

export default About
