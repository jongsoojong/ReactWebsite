import React, { Component } from 'react';
import Background from './Components/Background/Background';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header /> 
      <Background />
      </div>
    );
  }
}

export default App;
