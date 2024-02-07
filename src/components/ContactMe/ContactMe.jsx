import React from 'react'
import './ContactMe.css'
import ContactinfoCard from './ContactinfoCard/ContactinfoCard'
import ContactForm from './ContectForm/ContactForm'
const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactinfoCard iconUrl={'../../../../Assets/email-icon.jfif'} text={"imakshat17@gmail.com"}/>
                <ContactinfoCard iconUrl={'../../../../Assets/github-icon.jfif'} text={"https://github.com/imakshat17"}/>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
