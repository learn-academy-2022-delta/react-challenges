import React, { Component } from 'react'

class FoodItems extends Component {
  render() {
    return (
      <>
        <ul>
            {this.props.menuItems.map(item => {
            return <li>
                <button onClick={()=>{this.props.yourOrder(item)}}>
                    {item}
                </button>
                    </li>
            })}
        </ul>
      </>
    )
  }
}

export default FoodItems