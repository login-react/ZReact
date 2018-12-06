import React from 'react';


class Child extends React.Component {

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleChange} placeholder="child" />
                <span style={{color: 'blue'}}>{this.props.msg}</span>z
            </div>
        );
    }
}

export default Child;