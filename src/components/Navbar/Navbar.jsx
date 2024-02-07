import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav'

const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const toggleMenu=()=>{
        setOpenMenu(!openMenu)
    }
  return (
  <>
  <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrappper'>
        <div className='nav-content'>
                  <div className='logo'>Akshat Kumar</div>

                  <ul>
                    <li>
                        <a className='menu-items'>Home</a>
                    </li>
                    <li>
                        <a className='menu-items'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-items'>Work Experience</a>
                    </li>
                    <li>
                        <a className='menu-items'>Contect Me</a>
                    </li>
                         <button className='contact-btn' onClick={()=>{}}>Hire me</button>
                  </ul>

                  <button className='menu-btn' onClick={toggleMenu}>
                    <span className={"meterial-symbols-outlined"}
                    style={{fontSize:"1.8rem"}}>{
                        openMenu?"close":"menu"
                    }</span>
                  </button>
        </div>

    </nav>
  
  </>
  )
}

export default Navbar
