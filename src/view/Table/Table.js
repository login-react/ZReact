import  React from 'react';
import axios from 'axios';



class Table extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
       axios.get('/api/detail').then(data => {
           console.log("---data", data)
       })
    }

    render() {
        return(
            <div>
                123
            </div>
        )
    }
};

export default  Table