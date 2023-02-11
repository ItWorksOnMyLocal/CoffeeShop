import React, { useState } from 'react';

function OrderForm() {
    const [name, setName] = useState('');
    const [coffee, setCoffee] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // send the order details to the server
        fetch('https://localhost:3000/orders', {
            method: 'POST',
            body: JSON.stringify({ name, coffee }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));

        // firebase.firestore().collection('orders').add({
        //     name,
        //     coffee
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>

            <label>
                Coffee:
                <select value={coffee} onChange={(event) => setCoffee(event.target.value)}>
                    <option value="">Select a coffee</option>
                    <option value="standard">Standard</option>
                    <option value="cappuccino">Cappuccino</option>
                    <option value="americano">Americano</option>
                    <option value="cortado">Cortado</option>
                    <option value="espresso">Espresso</option>
                    <option value="ice-coffee">Ice Coffee</option>
                </select>
            </label>

            <button type="submit">Submit Order</button>
        </form>
    );
}

export default OrderForm;