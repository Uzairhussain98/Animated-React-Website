import React from 'react'
import './Energy.css'
import image from "./circuit.gif"
import Fade from 'react-reveal/Fade';


const Energy = () => {
    return (
        <div className="energy">
            <img className="energy__image" src={image} alt="ipad"/>
<Fade right duration={2000}>
        <div className="energy__text">
            <h1>Efficient Use</h1>
            <h4>Artificiat Intelligence balances your comfort, energy usage and budget
                in the background while learning your preferneces
            </h4>
           
        </div>
        </Fade>
    
      
    </div>
    )
    }
    

export default Energy
