// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
    clicker = (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
    render(){
        return(
            <div>
                <button onClick={this.clicker}>Click</button>
            </div>
            
        )
    }
}

export default CoordinatesButton