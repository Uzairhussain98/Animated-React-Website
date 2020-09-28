import React from 'react'
import './Home.css'
import image from "./home.gif"

const Home = () => {
  return (
    <div className="home">
        <img className="home__image" src={image} alt="ipad"/>
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
           
      
    </div>
  )
}

export default Home
