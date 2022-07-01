import React, { Component } from "react"
import "./App.css"
export default class App extends Component {
    constructor(props) {
    super(props)
   this.state =  {
        name: "",
        userInput: ""
    }
  }
    handleChange = (e) => {
        this.setState({ name: e.target.value}) 
        this.setState({ userInput: e.target.value})
    }
    render() { 
        
    return (
      <>
        <h1>Robo Active Listening</h1>
        <input
         type="text"
         onChange={this.handleChange}
         value={this.state.name}
         />
         
        <p>
        <input
         type="submit"
         submit={this.state.userInput}
         onChange={this.handleChange}
         />
      </p>
     
      </>
    )
  }
}


