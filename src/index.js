import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';


import createStore from './store'

const store = createStore();

// setTimeout(function () {
//     store.dispatch({
//         type: 'LOGIN',
//         payload: {
//             auth: 'poor'
//         }
//     })
// },2000);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
