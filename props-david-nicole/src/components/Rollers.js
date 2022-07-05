import React, { Component } from 'react'
class Rollers extends Component {
    render() {
        return (
            <>
            <body>
            <div class="title">Dice of Fortune!</div>
            <h2 class="number">{this.props.name[this.props.number]}</h2>
            <button onClick={this.props.button}>Roll Me!</button>
            </body>
            </>
        )
    }
}
export default Rollers;