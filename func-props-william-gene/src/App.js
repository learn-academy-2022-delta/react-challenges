import React, { Component } from 'react'
import FoodItems from './components/FoodItems'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        foodItems : ["Burger","Cheeseburger","Hot dogs","Little fries","Biggie fries" ],
        customerOrder : [],
      }
  }
  yourOrder = (item) =>{
    this.setState({customerOrder: [...this.state.customerOrder, item]})
  }
  render() {
    return (
      <>
        <h1>Food For Thought</h1>
        <h2>Available</h2>
          <FoodItems menuItems = {this.state.foodItems} yourOrder = {this.yourOrder}/>
        <h3>Your Order</h3>
          <ul>
            {this.state.customerOrder.map(item=>{
              return <li>{item}</li>
            })}
          </ul>      
      </>
    )
  }
}

export default App
          
