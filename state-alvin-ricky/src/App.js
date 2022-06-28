import React, { Component } from 'react'
import Box from './components/Box'
import AddButton from './components/AddButton'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <AddButton />
        <Box />
        <Box />
        <Box />
      </>
    )
  }
}

export default App