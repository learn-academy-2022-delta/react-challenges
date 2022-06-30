import React, { Component } from 'react'
import Dice from './components/Dice'
import './App.css' 


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diceRoll: [1,2,3,4,5,6], 
      currentRoll: 0,
      oldRolls: []
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
      <h1>Dice Roller</h1> 
      <p>"They see me rolling, they hating, patrolling trying to catch me riding dirty..." - Chamillionaire</p>
      <br></br>
      <h2>Roll em</h2>
      <Dice dice={this.state.diceRoll[this.state.currentRoll]}/>
      <button onClick={this.handleClick}>Click to Roll</button>
      <br></br>
      <p></p>
      </>


    )
  }
}

export default App