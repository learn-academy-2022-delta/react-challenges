import App from "../App";
import React, { Component } from "react";

class GoodRobot extends Component{
    render(){
        return(
            <>
            <h1>test</h1>
            <h1>Good Robot:I hear you saying {this.props.banana}. Is that correct?</h1>
            </>
        )
    }
}

export default GoodRobot