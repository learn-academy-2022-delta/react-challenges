import React, { Component } from 'react'
import RoboKevin from './components/RoboKevin'
import RoboMichael from './components/RoboMichael'
import RoboDwight from './components/RoboDwight'

export class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      userInput: ""
    }
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({userInput: e.target.value})
  }

  render() {
    return (
      <>
      <input type= "text" value= {this.state.userInput} onChange= {this.handleChange} />
      <p>{this.state.userInput}</p>
      <br/>
      <RoboKevin
        response={this.state.userInput}
        />
      <br/>
      {/* <RoboMichael
        response={this.state.userInput}
        onChange={this.handleChange}/>
      <br/>
      <RoboDwight
        response={this.state.userInput}
        onChange={this.handleChange}/> */}
      </>
    )
  }
}

export default App
