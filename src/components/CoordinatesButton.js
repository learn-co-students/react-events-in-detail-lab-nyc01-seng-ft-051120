// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component{
  handleClicks =event=>{this.props.onReceiveCoordinates([event.clientX, event.clientY]); } 
render(){
  return(
   <button onClick={this.handleClicks}>Coords</button>
  )}
}
export default CoordinatesButton