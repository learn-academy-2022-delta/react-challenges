import React, { Component } from 'react'

class Evilrobot extends Component {
  
  render() {
    

    return (
      <>
        <h4>Evil Robot</h4>
        <p>I hear you saying {this.props.userInput} . Is that correct?</p>
      </>
    )
  }
}

export default Evilrobot