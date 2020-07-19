import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    

    render() {
        console.log('coordinate button props',this.props)
        return (
            <div>
                <button 
                    onClick={(e) => this.handleClick(e)}
                >
                <h1>Coordinates</h1>
                </button>
            </div>
        )
    }
}


export default CoordinatesButton