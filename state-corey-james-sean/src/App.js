import React, { Component } from 'react'
import './Box.js'
import './App.css'



export class App extends Component {


  render(){ 

    return (
      <>
      <header>Color Box</header>
      <button onClick={this.handleAdd}>Add Box</button>
      <button onClick = {this.handleDelete}>Delete Box</button>
      
      </>
    )
  }
}

export default App

