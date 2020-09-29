import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Container from './components/Container';
import Control from './components/Control';
import Energy from './components/Energy';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       <Header/>
       <Home/> 
       <Container/>
       <Control/>
       <Energy/>
       <Footer/>

   
    </div>
  );
}

export default App;
