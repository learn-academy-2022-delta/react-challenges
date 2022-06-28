import React, {Component} from 'react'

class Tracker extends Component {
    constructor(props) {
    super(props)
    this.state = {
        miles: 0,
    }
}      
    addMile = () => {
        this.setState({miles: this.state.miles + 1})
    }
    render() {
        // console.log(this.state.miles)
        return(
            <>
            <h2>mile Tracker</h2>
            <p>miles: {this.state.miles}</p>
            <button onClick={this.addMile} >add a mile</button>
            </>
        )
    }
}
export default Tracker