import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipAddress: ""
    }
  }

  getInfo = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({ipAddress: payload}))
  }

  render() {
    return (
      <>
        <h1>
          Find your location
        </h1>
        <button onClick={this.getInfo}>
          Submit to find your location
        </button>
        <p>
          Location: {this.state.ipAddress.city}, {this.state.ipAddress.region_code}
        </p>
        <p>
          IP Address: {this.state.ipAddress.ip}
        </p>
      </>
    )
  }
}

export default App
