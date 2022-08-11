import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputName: ''
        }
    }
    somethingChange=(e)=>{
console.log(e);
this.setState({
    inputName: e.target.value
})
    }
    render() {
        return (
            <form>
                <input type='text' value={this.state.inputName} onChange={this.somethingChange}/>
            </form>
        );
    }
}

export default Form;
