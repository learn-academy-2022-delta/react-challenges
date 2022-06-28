import React, { Component } from 'react'


class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: "white"
        };
    }

    changeColor = () => {
        const newColor = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
        const randomColor = newColor[Math.floor(Math.random() * newColor.length)];
        this.setState({colors: randomColor})    
    }

    render() {
        return (
            <>
                <button className="boxes" style={{ backgroundColor: this.state.colors }} 
                onClick = {this.changeColor}>Click Me</button>
            </>
        )
    }
}

export default Box