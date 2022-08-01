import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipAddress:""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({ipAddress: payload}))
    .catch(error => console.log(error))
  }



  render() {
    return (
      <>
        <h1>Look up your IP Address</h1>
        <button onClick={this.getIP}>Click for IP Address</button>
        <p>IP:{this.state.ipAddress.ip}</p>
      </>
    )
  }
}

export default App


