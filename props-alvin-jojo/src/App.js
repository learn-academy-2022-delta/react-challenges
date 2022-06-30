import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: 1,
      numbersRolled: [],
    }
  }

  handleClick = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1
    this.setState({randomNumber : randomNum})
  }

  numbersRolledFunction = () => {
    let newList = []
    this.setState({randomNumber : newList})
  }


    
  render() {
    return (
      <>
      <div>Random Dice Roll</div>
        <Dice number={this.state.randomNumber}
              clickMethod={this.handleClick}
        />
        <Rolls />
        <div>
          {this.setState}
        </div>
      </>
    )
  }
}
export default App;