import React, { Component } from 'react'

class Dice extends Component {





  render() {
    console.log(this.props)
    return (
      <>
      <div>Dice 1</div>
      <h1>{this.props.diceRoll[this.props.rollCount]}</h1>
      <button onClick={this.props.clickMethod}>Click me!</button>
      </>
    )
  }
}












export default Dice