import React from 'react'
import './Control.css'
import image from './source.gif'
import Fade from 'react-reveal/Fade';


const Control = () => {
  return (
    <div className="control">
        <Fade left duration={2000}>
    <div className="control__text">
        <h1>Energy Control</h1>
        <h4>Using energy more productively to achieve economic growth, 
            a cleaner environment and greater energy security, affordability
            and reliability.
        </h4>
       
    </div>
    </Fade>
    <img className="control__image" src={image} alt="ipad"/>

  
</div>
)
}

export default Control
