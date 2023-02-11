import './App.css';

// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
    return (
        <div>
            <h1>Coffee Ordering App</h1>
            <OrderList />
        </div>
    );
}

function Main() {

    return (
        <div className="Main">
            <OrderForm />
            <OrderList />
        </div>
    );
}
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
export default Main;
