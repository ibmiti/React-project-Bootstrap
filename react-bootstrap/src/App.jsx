import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;



// whats taking place in this file
 // this file will act as the hub and the anchor for which all other files that containt components will route too. notice the <router> piece of Code

// we are first importing react and the component property
// then importing the app.css which will style the app
// then we are importing BrowserRouter and making it act as a Router point and that comes from facebooks 'react-router-dom'
// then we are importing the Home page and about and news page
// then we are giving all of those components a place to rest, 'Class App'
