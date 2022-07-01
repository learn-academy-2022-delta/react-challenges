import React, { Component } from 'react'
import Kanye from './components/Kanye'
import Evilrobot from './components/Evilrobot'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        userInput : ""
    }
  }
  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({userInput: e.target.value})
  }
  evilChange = (e) => {
    // console.log(e.target.value)
    this.setState({userInput: "MUAHAHAHAHAHAHAHHA"}) // NEED CHANGES HERE?
  }  
  render() {
    return (
      <>
        <h1>Bad Robots</h1>
        <p>Say something</p>
        <input type="text" 
               onChange={this.handleChange}/>
        <Evilrobot userInput= {this.state.userInput}/>       
        <h4>Good Robot</h4>
        <p>I hear you saying {this.state.userInput}. Is that correct?</p>
        <Kanye userInput= {this.state.userInput}/>
      </>
    )
  }
}

export default App