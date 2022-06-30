import App from "../App";





import React, { Component } from 'react'

class NumbersRolled extends Component{
  render(){
    // console.log(this.props.rolled)
    return(
        <>
            
            
            <h2> </h2>
            <button onClick={this.props.dice}>dice roll</button>
            <h2> Rolled numbers array: {this.props.rolled.map(value => {
                return <p>{value}</p>

            })} </h2>
            
            
            
            
           
        </>
    )
  }
}

export default NumbersRolled