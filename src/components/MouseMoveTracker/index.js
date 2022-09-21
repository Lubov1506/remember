import React, { Component } from 'react';

class MouseMoveTracker extends Component {
    constructor(props) {
        super(props);
        this.state={
            x:0,
            y:0
        }
    }
    handlerMouseMove = (event)=>{
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }
    render() {
        const inlineStyles = {
            height: '100vh',
            width: '100vw',
            border:'2px solid black'
        }
        const {x,y}= this.state
        return (
            <div style={inlineStyles} onMouseMove={this.handlerMouseMove}>
                <p>x: {x}</p>
                <p>y: {y}</p>
            </div>
        );
    }
}

export default MouseMoveTracker;
