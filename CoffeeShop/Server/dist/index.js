const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 44495;

app.use(express.json());
function validateOrder(order) {
    if (!order.coffee || !['latte', 'espresso', 'cappuccino'].includes(order.coffee)) {
        return false;
    }
    return true;
}

const saveOrder = order => {
    const client = new mongodb.MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });
    client.connect(error => {
        if (error) {
            console.error(error);
            return;
        }
        const db = client.db('coffee-orders');
        const orders = db.collection('orders');
        orders.insertOne(order, error => {
            if (error) {
                console.error(error);
            }
            client.close();
        });
    });
};

app.post('/api/orders', (req, res) => {
    const order = req.body;

    if (!validateOrder(order)) {
        return res.status(400).send('Invalid order');
    }

    saveOrder(order);

    console.log(order);

    res.send('Order received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});