import React from 'react';
import Child from './Child';
import List from './Data.json';
class Parent extends  React.Component {

    constructor(props){
        super(props)

        this.state ={
            inputValue:'',
            parent: '父亲',
            storeList:[]
        }
        this.state.storeList = List.arr
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
                <ul>
                    {
                        this.state.storeList.map((item,index) => {
                            return <li key={index}>{item.names}</li>
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default Parent;