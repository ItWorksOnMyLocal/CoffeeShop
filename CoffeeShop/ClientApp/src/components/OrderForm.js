import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [order, setOrder] = useState({
        type: '',
        name: '',
    });

    const handleChange = (event) => {
        setOrder({
            ...order,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:44495/api/orders', order)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="type">Type of Coffee:</label>
                <select id="type" name="type" onChange={handleChange}>
                    <option value=""></option>
                    <option value="latte">Latte</option>
                    <option value="cappuccino">Cappuccino</option>
                    <option value="espresso">Espresso</option>
                </select>
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} />
            </div>
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default OrderForm;
