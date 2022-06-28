import React, {Component} from 'react'

class Box extends {Component} {
    constructor(props) {
        super(props)
        this.state = {    
        }
      }
      render(){
        return(
          <>
            <Box
                style={{
                backgroundColor: "blue",
                borderRadius: 4,
                color: "yellow",
                minHeight: 200,
                padding: 12,
                width: 300,
            }}
            >
            </Box>
          </>
        )
    }
}

export default Box