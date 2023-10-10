import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";

import {reducer} from "./reducer";
import {createStore, bindActionCreators} from "redux";
import * as actions from './actions'
const store = createStore(reducer)
const {dispatch} = store

const{increment, decrement, random} =
    bindActionCreators(actions, dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'));

const updateCounter = ()=>{
    root.render(
        <App
            counter={store.getState()}
            decrement={decrement}
            increment={increment}
            random={random}
        />
    );
}
updateCounter()
store.subscribe(updateCounter)