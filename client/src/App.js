import React from 'react'
import Navbar from './components/Navbar'
import {Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
// import "./App.css";
import ErrorPage from './components/Errorpage';



const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route >
        <ErrorPage />
      </Route>
    </>
  )
}

export default App
