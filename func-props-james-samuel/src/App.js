import React, { Component } from 'react'
import Menu from './Components/Menu.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      foodMenu: ["fish", "chicken", "pork", "beef", "macNCheese", "mashedPotatoes"],
      prices: [5, 5, 6, 8 , 3, 2],
      order: []
     }
    }
  }

  iWant = (item) => {
    this.setState({ order: [...this.state.order, item] })
      console.log(this.state.order)
  }

render() {
    return (
      <>
        <h1>Dirty Dawgs Food Bar</h1>
        <h2>Menu</h2>
        <Menu menuitems={this.state.foodMenu} iWant={this.iWant} />
        <h2>Your order</h2>
        <ul>
          {this.state.order.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </>
    )
  }

export default App