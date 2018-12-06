import React from 'react';
import Child from './Child';

class Parent extends  React.Component {
    state ={
        inputValue:'',
        parent: '父亲'
    }

    handleChange =(e) => {
        this.setState({
            inputValue: e.target.value || 'adf'
        })
    }

    render() {
        return (
            <div>
                <Child handleChange={this.handleChange} msg={this.state.parent}/>
                <span style={{ color: 'red'}}>{this.state.inputValue}</span>
            </div>
        );
    }
}

export default Parent;