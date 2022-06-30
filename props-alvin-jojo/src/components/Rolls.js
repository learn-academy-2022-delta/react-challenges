import React, { Component } from 'react'

 class Rolls extends Component {
  render() {
    console.log(this.props)
    return (
        <>
      <div>Rolls</div>
      <div>
        <h2>{this.props.numbersRolled}</h2>
      </div>
      </>
    )
  }
}
export default Rolls
