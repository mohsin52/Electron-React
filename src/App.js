import React, { Component } from 'react';
import Routes from './config/routes';
import Navigation from './components/Navigation'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
