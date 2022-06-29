import React from 'react'
import "./Component/style.css"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {  
    }
  }

  render(){
    return(
      <>
        <h1>Color Box</h1>
        <button>add a box</button>
        <h2></h2>
        <div className="box">
          <h3>
            style = {{text}}
            White
          </h3>
        </div>
        

      </>
    )
  }
}

export default App
