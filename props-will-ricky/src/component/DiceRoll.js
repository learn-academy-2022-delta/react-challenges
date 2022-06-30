import React, { Component } from 'react'

class DiceRoll extends Component {
    render() {
        return (
            <>
             <div>DiceRoll</div>
             <h1>{this.props.name}</h1>
             <button onClick = {this.props.clickMethod}>Click Me</button>

             
             </>
        )
    }
 }
    
 export default DiceRoll;   
  