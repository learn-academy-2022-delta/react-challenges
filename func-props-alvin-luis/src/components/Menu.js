import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
        <>
        <ul>
            {this.props.menuItems.map(item => {
                return <li><button onClick={() => {this.props.plateOrder(item)}}>{item}</button></li>
            })}
        </ul>
        </>
    )
  }
}

export default Menu