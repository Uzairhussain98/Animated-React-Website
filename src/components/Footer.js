 import React from 'react'
 import './Footer.css'
 import { SocialIcon } from 'react-social-icons';

 const Footer = () => {
   return (
     
    <div className="footer">
        <h2>Join us and grow alongside the best in the industry</h2>
        
         <SocialIcon bgColor="rgb(255, 160, 0)" fgColor="rgb(107, 105, 105)" style={{margin:'20px' }} url="http://linkedin.com/" />
        <SocialIcon bgColor="rgb(255, 160, 0)" fgColor="rgb(107, 105, 105)"  url="http://facebook.com/" /> 

    {/* <div className="footer__line">

    </div> */}
      
    </div>
  )
}
       
  
 
 export default Footer
 