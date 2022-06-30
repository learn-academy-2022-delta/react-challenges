import React, { Component } from 'react'

class Dice extends Component {


    render() {
    return (
      <>
      <h1>Dice Rolls</h1>
      <h2>You rolled a: {this.props.rollCount}</h2>
      <button onClick={this.props.clickMethod}>Roll me!</button>
      <h2>{this.props.dice}</h2>
      </>
    )
  }
}











export default Dice