import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Container from './components/Container';
import Control from './components/Control';
import Energy from './components/Energy';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/About">
    <Header/>
    <About/>
        </Route>

      
        <Route path="/Contact">
    <Header/>
    <Contact/>
        </Route>

    
          
        <Route path="/">
        <Header/>
       <Home/> 
       <Container/>
       <Control/>
       <Energy/>
       <Footer/>

        </Route>
        </Switch>
        </Router>







     
   
    </div>
  );
}

export default App;
