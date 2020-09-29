import React from 'react'
import './Container.css'
import Bounce from 'react-reveal/Bounce';


const Container = () => {
  return (
    <div className="container">

    <Bounce duration={1200} delay={300}>
        <div className="container__text">
            <h1>Robust is a future of home energy management
                you know your home is place of secuirty and warmth
                and with Robust your home is now intellegent
            </h1>

        </div>
        </Bounce>
        
      
    </div>
  )
}

export default Container
