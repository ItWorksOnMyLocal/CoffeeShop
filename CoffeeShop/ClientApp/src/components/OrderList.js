import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Coffee</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(order => (
                <tr key={order._id}>
                    <td>{order.coffee}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default OrderList;
