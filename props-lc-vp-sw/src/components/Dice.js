import React, { Component } from 'react'

class Dice extends Component {
  render() {
    return (
      <>
      <h1>Dice Roller</h1>
      <p>{this.props.array[this.props.nums]}</p>
      <button onClick={this.props.diceClicker}>Roll Dice!</button>

      </>
    )
  }
}

export default Dice



