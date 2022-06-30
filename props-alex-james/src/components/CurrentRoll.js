import App from "../App";


import React, { Component } from 'react'

class CurrentRoll extends Component{
  render(){
    return(
        <>
            <h1>CurrentRoll</h1>
            <h2> {this.props.name}</h2>
            
        </>
    )
  }
}

export default CurrentRoll