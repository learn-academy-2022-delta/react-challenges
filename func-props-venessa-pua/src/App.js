import React, { Component } from "react";
import Menu from './components/Menu.js'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {
    food: ["Hamburger $5.99", "Fries $2.00", "Milkshake $3.50"],
    plate: []
  }
}
plateOrder = (item) => {
  console.log('before: ', this.state.plate)
  this.setState({ plate: [...this.state.plate, item]})
}
render() {
  console.log('after: ', this.state.plate)
  return(
    <>
    <h1>Food And Their Prices</h1>
    <h2>Food</h2>
      <Menu menuItems={this.state.food} plateOrder={this.plateOrder} />
    <h2>Order</h2>
      <ul>
        {this.state.plate.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </>
  )
}
}
export default App