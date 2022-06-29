import React, { Component } from 'react'
import './index.css'

class ColorBox extends Component {
  constructor (props) {
    super (props)
    this.state = {
      colornames: "white"
    }
  }
changeColor = () => {
  this.setState({colornames: this.state.colornames + 1})
}
render(){
  return (
    <>
    <h2>Color Box Mania</h2>
    <p>colornames: {this.state.colornames}</p>
    <button onClick={this.changecolor}>Change color</button>
    </>
  )
}

}

export default ColorBox 
