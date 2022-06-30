import React, { Component } from 'react'
import Dice from "./Dice"
import "./App.css"

class App extends Component {
 constructor (props) {
    super(props)
    this.state = {
    diceRoll: [],
    rollCount: ""
  }
 }

 
 handleClick = () => {

  let randomCount = Math.floor(Math.random() * 6 )
  // console.log(randomCount) 
  // this.setState({ diceRoll: this.state.diceRoll [rollCount]})
  this.setState({diceRoll: [this.state.diceRoll, randomCount],rollCount: this.state.rollCount
 })
 }
 render() {
    return (
      <Dice
      dice={this.state.diceRoll}
      clickMethod={this.handleClick}
      // <h1>Dice Roller</h1>
      //   <h2>You have rolled {this.state.rollCount} times!</h2>
      //   <button onClick={this.rollDice}>Roll Dice</button>
      />
    )
  }
}






export default App