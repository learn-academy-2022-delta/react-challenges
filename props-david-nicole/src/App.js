import React, { Component } from 'react'
import Rollers from './components/Rollers'
import './App.css'
import PastRolls from './components/PastRolls'
class App extends Component{
  constructor(props) {
    super(props) 
    this.state={
      diceNumbers: [1,2,3,4,5,6],
      randomDice: 0,
      rollCount: []
    }
  }
  handleClick = () => {
    let randomNum = Math.floor(Math.random() * this.state.diceNumbers.length)
    this.setState({randomDice: randomNum})
    console.log(randomNum)
}
rollResult = () => {
  let rollBounce = console.log(this.randomNum)
}
  render(){
    return(  
         <>
            <Rollers name={this.state.diceNumbers}
            number={this.state.randomDice}
            button={this.handleClick}/>
            {/* <button onClick={this.handleClick}>Roll Me!</button> */}
          </>
    )
  }
}

export default App


