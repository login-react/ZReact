import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mock/index';
// import App from './
import 'antd/dist/antd.css'
import View from './view/Parent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<View />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
