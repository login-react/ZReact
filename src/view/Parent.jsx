import React from 'react';
import Child from './Child';
import List from './Data.json';
import axios from 'axios';
import { Switch, Button,Table,Input } from "antd";
import Table1 from './Table/Table'


class Parent extends  React.Component {
    constructor(props){
        super(props)
        console.log(Array.isArray(List.arr))
        this.state ={
            inputValue:'',
            parent: '父亲',
            storeList:[],
            nextInputValue: List.arr.map((item,index) => {
                return item.names
            }),

        }
    }

    handleChange =(e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleEdit = (e, index) => {
        const nextInputValue = this.state.nextInputValue;
        console.log(nextInputValue[index])
        nextInputValue[index]= e.target.value;
        this.setState({
            ...this.state,
            nextInputValue
        })
    }

    componentDidMount() {
        axios.post('/api/demo')
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    return <div>
                        {
                            res.data.arr.map((item,index) => {
                                return <span style={{ color: 'red'}} key={index}>{item.names}</span>
                            })
                        }
                    </div>
                }
            })

    }

    handleTable  = (name, r) => {
        console.log("name", name,r)
    }
        render() {

        const dataSource = [
            {
               key:'1',
               name:'测试情况1',
               age:32,
               address:'西湖区湖底公园'
            },
            {
                key: '2',
                name:'测试情况2',
                age: 31,
                address:'苏区园林'
            }
        ];
        const columns = [
            {
                title: '姓名',
                dataIndex:'name',
                key:'name',
                render:(name,r,index) => (
                    <span>
                        <Input value={name} style={{width: 120}} onChange={ event => {this.handleTable(index,r)}}/>
                    </span>
                )
            },
            {
                title:'年龄',
                dataIndex: 'age',
                key:'age'
            }
        ]

        return (
            <div>
                {/*<Child handleChange={this.handleChange} msg={this.state.parent}/>*/}
                {/*<span style={{ color: 'red'}}>{this.state.inputValue}</span>*/}

                    {
                     this.state.nextInputValue.map((item,index) => {
                          return <input value={item} key={index} onChange={(event) => {this.handleEdit(event, index)}}/>
                      })
                    }
                <Button type="primary">imay</Button>
                <Table dataSource={dataSource} columns={columns}/>
                <Table1/>
            </div>
        );
    }
}

export default Parent;