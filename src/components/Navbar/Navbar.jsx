// import React from 'react'
import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '/src/assets/logo.png'
import menu_icon from '/src/assets/menu-icon.png'
import { Link } from 'react-scroll'
function Navbar() {
  const [sticky, setSticky] = useState('')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>

  )
}
export default Navbar;
