import React, { Component } from 'react'
import DiceRoll from './component/DiceRoll'
import RollLog from './component/RollLog'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceNum: ["1", "2", "3", "4", "5", "6"],
      randomRoll: 0,
      rollArray: []
    };
  }


handleClick = () => {
  
  let randomNum = Math.floor(Math.random() * this.state.diceNum.length)

  this.setState ({ randomRoll: randomNum })

  let rollLog = [this.state.rollArray].push(randomNum)
  
  this.setState ({ rollArray: rollLog })
}

render() {

  return (
    
 <>
    <DiceRoll 
      name={this.state.diceNum[this.state.randomRoll]}
      clickMethod={this.handleClick}
      
               />

    <RollLog 
      
      namelog = {this.state.rollLog[this.state.rollArray]}
               />           
</>

  )
 }
}
 
export default App