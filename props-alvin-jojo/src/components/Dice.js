import React, { Component } from 'react'

class Dice extends Component {
  render() {
    console.log(this.props)
    return (
        <>
      <div>Dice</div>
      <h2>{this.props.number}</h2>
      <button 
        onClick={this.props.clickMethod}
        // numbersList={this.numbersRolledFunction}
        
        >
        Click Box to Roll</button>
        <ul>
            {this.props.numbersRolled}
        </ul>
      </>
    )
  }
}
export default Dice