import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      color: "white"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]
    this.setState({ color: randomColor })
  }
  render() {
    return (
      <>
        <h1>Color Boxes</h1>
        <div className="itembox" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
        {this.state.color}
        </div>
        <button> Add a box </button>
        <button> Remove a box </button>
      </>
    )
  }
}

export default App
