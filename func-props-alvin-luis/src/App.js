import React, { Component } from 'react'
import Menu from './components/Menu'
import Price from './components/Price'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: ["Bacon $50", "Sausage", "Eggs", "Fruit", "Biscuit", "Toast"],
      menuPrices: [100, 20, 30],
      drinks: ["Orange Juice", "Coffee", "Tea", "Water", "Milk"],
      plate: [],
      plateIndex: [50, 5, 2],
      total: 0
    }
  }

  plateOrder = (item) => {
    this.setState({ plate: [...this.state.plate, item]})
    console.log(this.state.plate)
  }

  setTotal = (item) => {
    this.setState({ total: [...this.state.total, item]})
  }




  render() {
    return (
      <>
      <h1>Breakfast Menu</h1>
      <Menu menuItems={this.state.menu} plateOrder={this.plateOrder} />

      <h1>Drinks</h1>
      <Menu menuItems={this.state.drinks} plateOrder={this.plateOrder} />

      <h1>Your Plate:</h1>
      <ul>
        {this.state.plate.map(item => {
          return <li>{item}</li>
        })}
      </ul>
      <h3>Total: </h3>

      </>
    )
  }
}

export default App