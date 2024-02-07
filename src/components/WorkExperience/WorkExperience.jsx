import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utilities/data'
import ExperienceCard from './ExperienceCard'
import Slider from 'react-slick'
const WorkExperience = () => {
     const sliderRef=useRef();
     const  settings={
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {breakpoint:760,
            settings:{
                 slidesToShow:1,
                 slidesToScroll:1
            },},
        ],
     };
  return (
   <section className='experience-container'>
    <h5>Work Experience</h5>
    <div className='experience-content'>
        <Slider ref={sliderRef} {...settings}>
        {WORK_EXPERIENCE.map((item)=>(
            <ExperienceCard key={item.title} details={item}/>
        ))}
        </Slider>
         </div>
   </section>
  )
}

export default WorkExperience
