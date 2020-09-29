import React from 'react'
import './Home.css'
import image from "./home.gif"
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <div className="home">
        <img className="home__image" src={image} alt="ipad"/>
        <Fade big duration={3000}>

        <div className="home__text">
            <h1>Robust Technologies
            </h1>
            <h4>
                Putting Controls Of Your Home Energy Usage In Your Own Hands
            </h4>
            <div className="buttons">
            <button className="home__btn">Get Started</button>
            <button className="home__btn_two">Know More</button>

            </div>
           

        </div>
        </Fade>
           
      
    </div>
  )
}

export default Home
