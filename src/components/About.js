 import React from 'react'
 import './About.css'
 import image from './mark.png'
 import { SocialIcon } from 'react-social-icons';
 import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
 import Flip from 'react-reveal/Flip';



 
 const About = () => {

  const { keyframes, timing } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: 800, // Speed up the animation
      iterations: Infinity,
    },
  });
   return (
     <div className="about">
       <Flip left duration={2000}>

       <div className="about__text">
         <h1>About</h1>
         <h4>This website is made by Uzair Hussain . Feel free to connect or get in touch </h4>

         <SocialIcon className="icon" url="http://twitter.com/" />
         <SocialIcon  className="icon" url="http://facebook.com/" />
         <SocialIcon   className="icon" url="http://github.com/" />
         <SocialIcon   className="icon" url="http://linkedin.com/" />



       </div>
      </Flip>

       <img ref={ref} className="about__image" src={image} alt="" loading="lazy" />
     </div>
   )
 }
 
 export default About
 