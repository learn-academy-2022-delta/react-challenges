import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: 1,
      numbersRolled: [1, 2, 3],
    }
  }

  handleClick = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1
    this.setState({
      randomNumber : randomNum,
      numbersRolled: [...this.state.numbersRolled, randomNum]
    })
  }

  // numbersRolledFunction = () => {
  //   this.setState(state => {
  //     const list = state.numbersRolled.concat(state.randomNumber)
  //     return {
  //       list,
  //       randomNumber: '',
  //     }
  //   });
  // }

onChangeValue = event => {
  this.setState({ randomNumber: event.target.randomNumber })
}
    
  render() {
    return (
      <>
      <div>Random Dice Roll</div>
        <Dice number={this.state.randomNumber}
              list={this.state.numbersRolled}
              clickMethod={this.handleClick}
              // numbersList={this.numbersRolledFunction}
              onClick={this.onChangeValue}
        />
        </>
    )
  }
}
export default App;