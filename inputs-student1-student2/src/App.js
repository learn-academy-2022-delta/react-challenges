import React, { Component } from 'react'
import GoodRobot from './Components/GoodRobot'
import { BadRobot } from './Components/BadRobot'
import GaryBot from './Components/GaryBot'

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <>
      <h1>Robot Active Listening</h1>
      <p>Say Something</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.userInput}
        />
        <GoodRobot
          userInput={this.state.userInput}
        />
        <BadRobot
          userInput={this.state.userInput}
        />
        <GaryBot
          userInput={this.state.userInput}
        />

      </>
    )
  }
}

export default App