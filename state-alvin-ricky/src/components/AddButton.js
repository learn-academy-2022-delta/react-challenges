import React, { Component } from "react"

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    addBox = () => {
        let newBoxCount = this.state.count + 1;
        this.setState({count: newBoxCount})
        console.log(this.state.count)
    }

    render() {
        return (
            <>
            <button onClick={this.addBox}>Add Button</button>
            </>
        )
    }
}

export default AddButton