import React from 'react';

class CoordinatesButton extends React.Component {

    handleClick = event => {
       this.props.onReceiveCoordinates([event.clientX, event.clientY]);
       console.log(event);
      };
    
      render() {
        return <button onClick={this.handleClick}>Coords</button>;
      }
    }

export default CoordinatesButton ;

