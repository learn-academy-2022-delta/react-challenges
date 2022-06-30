import React, { Component } from 'react'

export class Dice extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div id='dice' className = "itembox">{this.props.dice}</div>
    )
  }
}

export default Dice