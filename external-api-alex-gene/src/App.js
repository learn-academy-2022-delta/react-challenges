import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      nasa: {},
      pic: null,
    }
  }
componentDidMount (){
  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
  .then(response => response.json())
  .then(payload => {this.setState({nasa: payload.photos, pic:payload.photos[0].img_src})})
  .catch(error => console.log(error))
}
  getData = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({data:payload}))
    .catch(error => console.log(error))
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({pic:this.state.nasa[randomNum].img_src})
  }

  render() {
    return (
      <>
        <h1>Search IP</h1>
        <button onClick={this.getData}>Click to see IP</button>
        <p>IP : {this.state.data.ip}</p>
        <p>Location : {this.state.data.city}</p>
        <h1>Random Mars Photo</h1>
        <button onClick={this.getPic}>Click for random pic</button>
        <img src={this.state.pic} alt="random mars photo" style={{height:"200px",width:"400px"}}/>
      </>
    )
  }
}

export default App


