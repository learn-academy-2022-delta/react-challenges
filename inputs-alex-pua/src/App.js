import React, { Component } from "react";
import GoodRobot from "./components/goodrobot";

class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        name: "placeholder",
        badTextState: ""
      }
    }

    handleChange = (e) => {
      console.log(e.target.value)
      this.setState({ name: e.target.value})
      let badText = this.state.name
      badText = badText + "BLA"
      this.setState({ badTextState: badText})
    }



  render(){
    return(
      <>
      <h1>UserInput:</h1>
      
      <input type= "text" onChange={this.handleChange} value={this.state.name}/>
      {/* <h1>Good Robot:I hear you saying {this.state.name}. Is that correct?</h1> */}
      <h1>Bad Robot: {this.state.badTextState}</h1>
      <h1>Kanye Bot:</h1>
      <GoodRobot banana={this.state.name} />
      
      </>
    )
  }
  
}

export default App