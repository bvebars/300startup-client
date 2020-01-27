import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';


import createStore from './store'

const store = createStore();

setTimeout(function () {
    store.dispatch({
        type: 'SET_PRODUCT',
        payload: [
            {
                id: 0,
                title: 'Hello word'
            }
        ]
    })
}, 5000);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
