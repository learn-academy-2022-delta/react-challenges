import React, { Component } from 'react'

export class GoodRobot extends Component {
  render() {
    return (
        <>
        <br></br>
        <br></br>
        <img src="https://cdn.pastemagazine.com/www/blogs/lists/2011/01/26/wall-e.jpg" />
        <h1>Good Robot</h1>
        
        <p>I hear you saying, "{this.props.userInput}." Is that correct?</p>
      </>
    )
  }
}

export default GoodRobot