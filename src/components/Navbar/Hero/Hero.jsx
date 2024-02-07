import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
   <section className='hero-container'>
    <div className='hero-content'>
        <h2>Building Digital Experiences That Insipre</h2>
        <p>Passionate Fullstack developer| Transform Ideas Into Seamless and Visually Stunning Web Solutions</p>
    </div>
    <div className='hero-img'>
        <div>
            <div className='tech-icon'>
                <img src="../../../../Assets/react-logo.png" alt="" className='img1' />
            </div>
            <img src="../../../../Assets/img-1.webp" alt="" className='img2' />
        </div>
  <div >
    <div className='tech-icon'>
        <img src="../../../../Assets/Html-logo.webp" alt="" className='img3' />
    </div>
    <div className='tech-icon'>
        <img src="../../../../Assets/css-logo.jfif" alt="" className='img3' />
    </div>
    <div className='tech-icon'>
        <img src="../../../../Assets/js-logo.jfif" alt="" className='img3' />
    </div>
  </div>
    </div>
   </section>
  )
}

export default Hero
