import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Service from './Pages/Service';
import Navbar from './Pages/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/service" component={Service}/>
        <Route exact path ="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
