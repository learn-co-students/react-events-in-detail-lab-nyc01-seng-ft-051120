import React from 'react'
class DelayedButton extends React.Component{
    delay=(event)=>{
        event.persist()
        setInterval( ()=>{

            this.props.onDelayedClick(event)
       
           
        },this.props.delay

        )
         }
    render(){
       
        return(
            <button onClick={this.delay}>No</button>
        )
    }
}
export default DelayedButton