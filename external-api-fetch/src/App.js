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
        <h1>Find Your IP Addres</h1>
        <button onClick={this.getIP}>CLICK HERE to see IP Address</button>
        <p>IP: {this.state.ipAddress.ip}</p>
        <p>Location: {this.state.ipAddress.region}</p>
      </>
      
    )
  }
}




export default App;
