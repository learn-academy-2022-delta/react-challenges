import React, { Component } from 'react'
import './App.css';
import Dice from './components/Dice';
import Rolls from './components/Rolls';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: 0,
      log: 2
    }
  }
  leClick = () => {
    let num = Math.floor(Math.random() * 6)
    console.log(num)

    this.setState({ dice: num })
    this.setState({ log: num})
  }
// displays random superhero names on a click
// <div id="box">{this.props.dice}</div>
// <div id="box2">{this.state.log}</div>

  render() {
    return(
      <>
      <div>App</div>
      <Dice 
      dice={ this.state.dice }
      click={ this.leClick }
      />
      <Rolls
      log={ this.state.log }
      />
      <Dice />
      </>
    )
  }
}



export default App;
