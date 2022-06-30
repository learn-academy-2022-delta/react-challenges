import React, { Component } from 'react'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      diceNumbersArray: [1, 2, 3, 4, 5, 6,],
      numbersRolled: []
    }
  }

  rolledDice = () => {
    let currentRoll = Math.floor(Math.random() * (1, 6) + 1)
    this.state.numbersRolled.push(currentRoll)
    //this.setState({ numbersRolled: numbersRolled.push(currentRoll) })
    // let numbersRolled1 = []
   // numbersRolled1.push(currentRoll)
    console.log(currentRoll)
    console.log(this.state.numbersRolled)
    this.setState({ currentRoll: currentRoll})
  }

render(){
  return(
    <>
      <button onClick={this.rolledDice}>dice roll</button>
      <h1> Numbers rolled</h1>
      <h1>{this.state.numbersRolled}</h1>
      
      <h1>Dice</h1>
      <div className = "square" >
      <center> 
      <h2 >{this.state.currentRoll}</h2>
      </center>
      

      </div>
    </>
    )
  }
}

export default App

// Inside this.state we'll create an Array with the 6 sides of a dice - DONE
// Create a second value in this state with an Array of the numbers that were already rolled - DONE
// Create a method that when the user clicks  the button it's going to generate a random number and display it to the screen before adding it to the second array