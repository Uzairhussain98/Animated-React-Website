import React from 'react'
import './Contact.css'
import Fade from 'react-reveal/Fade';


const Contact = () => {
  return (
    <div className="contact">
          <Fade duration={2000}>

       <form className="contact__form">
        <h1>Contact Us</h1>
      <label >First Name</label>
    <input className="contact__input" type="text" name="firstname" placeholder="Your name.."/>
    <label >First Name</label>
    <input className="contact__input" type="text" name="lastname" placeholder="Your name.."/>
    <label >Email Address</label>
    <input className="contact__input" type="text" name="email" placeholder="Your name.."/>
    <label >Your Message</label>
    <textarea className="contact__msg"></textarea>
    <button className="btn" type="submit" >Submit</button>

      </form> 
      </Fade>
      
    </div>
    
  )
}

export default Contact
