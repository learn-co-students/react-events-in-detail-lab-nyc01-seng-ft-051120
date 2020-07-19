import React, { Component } from 'react'

class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        // window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        window.setTimeout(() => this.props.onDelayedClick(event), this.props.delay)

    }

    render() {
        console.log('delayed button props',this.props)
        return (
            <div>
                <button 
                    onClick=
                        {(e) => this.handleClick(e)}>
                    <h1>Delayed</h1>
                </button>
            </div>
        )
    }
}

export default DelayedButton