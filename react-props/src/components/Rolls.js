import React, { Component } from 'react'



class Rolls extends Component {
    
    render() {
        
        return (
            <>
                <h1>Rolls</h1>
                <div id="box2">{this.props.log}</div>
            </>
        )
    }
}

export default Rolls