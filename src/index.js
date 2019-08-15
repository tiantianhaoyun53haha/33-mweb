import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/iconfont.css";
import   "./styles/index.css";
import App from './App';
// 1 引入store
import store from "./store";
// 2 引入store和 react的连接器
import {  Provider } from "react-redux";

// 3 将store的数据提供给App根组件 
ReactDOM.render( <Provider store={store} ><App /></Provider>, document.getElementById('root'));


