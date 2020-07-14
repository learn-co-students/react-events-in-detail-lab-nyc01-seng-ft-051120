import React from 'react'
class DelayedButton extends React.Component{
    delay=(event)=>{
        let e=event
        setInterval( ()=>{

        
           
        },this.props.delay

        )
        this.props.onDelayedClick(e)
    }
    render(){
       
        return(
            <button onClick={this.delay}>No</button>
        )
    }
}
export default DelayedButton