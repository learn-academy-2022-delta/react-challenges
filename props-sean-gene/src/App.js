import React, { Component } from 'react'
import './App.css' 

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diceRoll: [1,2,3,4,5,6], 
      currentRoll: 0
      
    }
  }
  handleClick = () => {
    let randomNum = Math.floor(Math.random() * this.state.diceRoll.length)
    this.setState({currentRoll:randomNum})
    console.log(randomNum)
  }
  render() {
    return (
      <>
      <h1>Dice roller</h1> 
      <p>They see me rolling, they hating, patrolling trying to catch me riding dirty... dice roller game</p>
      <br></br>
      <p className = "itembox">{this.state.diceRoll[this.state.currentRoll]}</p>
      <button onClick={this.handleClick}>click me</button>
      </>


    )
  }
}

export default App