import React, { Component } from 'react'
import GoodRobot from "./Components/GoodRobot"
import BadRobot from "./Components/BadRobot"
import RuPaul from './Components/RuPaul'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }

handleChange = (e) => {
  this.setState({input: e.target.value})
}


  render(){
    console.log(this.state.input)
    return (
      <>
      <h1>Robot Active Listening</h1>
      <p>Say something:</p>
      <input 
      type="text" 
      onChange={this.handleChange}
      />
      <h2>Good Robot</h2>
      <h2>Bad Robot</h2>
      <h2>RuPaul Robot</h2>
      </>
    )
  } 


}






export default App