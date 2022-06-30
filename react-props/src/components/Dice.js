import React, { Component } from 'react'



class Dice extends Component {
    
    render() {
        
        return (
            <>
                <h1>Dice</h1>
                <div id="box">{this.props.dice}
                <button onClick={ this.props.click }>Click Me to Roll</button>
                 </div>
            </>
        )
    }
}

export default Dice;