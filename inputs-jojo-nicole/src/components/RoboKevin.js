import React, { Component } from 'react'

export class RoboKevin extends Component {
    
  render() {
    console.log(this.props.userInput)
    return (
      <>
        <h1>Robo Kevin</h1>
        <p>Kevin's famous chili :</p>
        <p>{this.props.userInput}</p>
      </>
    )
  }
}

export default RoboKevin