import React, { Component } from 'react'
import Dice from "./Dice"

class App extends Component {
 constructor (props) {
    super(props)
    this.state = {
    diceRoll: [],
    rollCount: 0
  }
 }

 
 handleClick = () => {

  let randomCount = Math.floor(Math.random() * 6 ) + 1 
  console.log(randomCount) 
  // this.setState({ diceRoll: this.state.diceRoll [rollCount]})
  this.setState({diceRoll: [this.state.diceRoll, randomCount],rollCount: this.state.rollCount + 1
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