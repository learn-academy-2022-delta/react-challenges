Challenge
Create a React application that shows the user their current location and IP address
Use this API and documentation

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipAddress: {}
    }
  }

getIP = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => this.setState({ipAddress: payload}))
  .catch(error => console.log(error))
}

  render() {
    console.log(this.state.ipAddress)
    return (
      <>
        <h1>Find Your IP Address</h1>
        <button onClick={this.getIP}>Click here to see your IP address</button>
        <p>IP: {this.state.ipAddress.ip}</p>
        <p>Location: {this.state.ipAddress.city}, {this.state.ipAddress.region_code}</p>

      </>
    )
  }
}

export default App


Stretch Challenge
Use an external API and docs to create an application of your choice
Here is the Nasa API