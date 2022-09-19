import React, { Component } from 'react';

class WindowSizes extends Component {
    constructor(props) {
        super(props);
        this.state ={
            width: window.innerWidth,
            height:  window.innerHeight
        }
    }
    resizeHandler = () =>{
        this.setState({
            width: window.innerWidth,
            height:  window.innerHeight 
        })
    }
    componentDidMount(){
        window.addEventListener('resize', this.resizeHandler)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeHandler)
    }
    render() {
        const {width, height} = this.state
        return (
            <div>
                <p>Width: {width}</p>
                <p>height: {height}</p>
            </div>
        );
    }
}

export default WindowSizes;
