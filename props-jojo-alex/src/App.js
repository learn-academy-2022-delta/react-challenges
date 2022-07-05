import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: ["Chicken", "Asparagus", "Potato", "Watermelon", "Milk Shake"],
      price: [5, 1, 2, 1, 3],
      foodSelected: []

    }
  }


  getPrice = (foodItem) => {
    // take input and return items index

    // take previous index and return price array value at same index 
    
    console.log(this.state.foodSelected)
    this.setState({foodSelected: [...this.state.food, foodItem]})
    return foodItem
    
    
    

  }



render(){
  
  return(
    <>
    <h2>
      food
      <ul>
        {this.state.food.map((item, index) => {
          return <li key={index}>
             <button onClick={() => {alert(this.state.price[index])}} > {item}</button>
             <button onClick={() => {this.getPrice(item)}}> Add item</button>
             </li>
        })}
       </ul>
    </h2>
    <h2>
      Food I want
      <ul> {this.state.foodSelected.map(item => {
        return <li>{item}</li>
      })}</ul>
      

    </h2>

    </>
  )
}
}

export default App


// onClick={() => {this.getPrice()}}