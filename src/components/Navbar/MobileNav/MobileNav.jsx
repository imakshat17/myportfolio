import React from 'react'
import "./MobileNav.css"
const MobileNav = ({isOpen,toggleMenu}) => {
  return (
  <>
  <div className={`mobile-menu ${isOpen?"active":" "}`} onClick={toggleMenu}>

 <div className='mobile-menu-container'>
    <div className='logo'>Akshat Kumar</div>
 

 <ul>
    <li>
        <a href="#" className='menu-items'>Home</a>
    </li>
    <li>
        <a href="#" className='menu-items'>Skills</a>
    </li><li>
        <a href="#" className='menu-items'>Work Experience</a>
    </li><li>
        <a href="#" className='menu-items'>Contact Me</a>
    </li>
    <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
 </ul>
 </div>
  </div>
  </>
  )
}

export default MobileNav
