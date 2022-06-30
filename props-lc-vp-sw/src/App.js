import React, { Component } from 'react'
import Dice from './components/Dice'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diceRoller: [1, 2, 3, 4, 5, 6, 7],
      diceNumber: 0
    }
  }

  handleDiceRoller = () => {
    let randomNumber = Math.floor(Math.random() * this.state.diceRoller.length)
  console.log(randomNumber)

  this.setState({diceNumber:randomNumber})
  }


  render() {
    return (
      <>
      <Dice array={this.state.diceRoller}
            nums={this.state.diceNumber}
            diceClicker={this.state.handleDiceRoller} />
      </>
    )
  }
}

export default App
