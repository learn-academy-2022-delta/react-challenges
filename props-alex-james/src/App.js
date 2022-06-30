import React, { Component } from 'react'
import './App.css';
import CurrentRoll from './components/CurrentRoll';
import NumbersRolled from './components/NumbersRolled';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      numbersRolled: [],
      currentRoll: 0
    }
  }

  rolledDice = () => {
    let roll = Math.floor(Math.random() * (1, 6) + 1)
    this.state.numbersRolled.push(roll)
    this.setState({ currentRoll: roll})
  }

render(){
  return(
    <>
    <CurrentRoll name={this.state.currentRoll}/>
    <NumbersRolled rolled={this.state.numbersRolled} dice={this.rolledDice}/>
      
      


      {/* <button onClick={this.rolledDice}>dice roll</button> */}
      {/* <h1> Numbers rolled</h1> */}
      {/* <h1>{this.state.numbersRolled}</h1> */}
      {/* <h1>Dice</h1> */}
      {/* <div className = "square" > */}
      {/* <h2 >{this.state.currentRoll}</h2> */}
    </>
    )
  }
}

export default App

// Inside this.state we'll create an Array with the 6 sides of a dice - DONE
// Create a second value in this state with an Array of the numbers that were already rolled - DONE
// Create a method that when the user clicks  the button it's going to generate a random number and display it to the screen before adding it to the second array