const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);

const orderSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    productIds: [mongoose.Schema.Types.ObjectId],
    status: String
});

const Order = mongoose.model('Order', orderSchema);

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send("Product not found");
        res.send(product);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).send("Product not found");
        res.send(product);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (!product) return res.status(404).send("Product not found");
        res.send(product);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.post('/orders', async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.send(order);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

app.get('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).send("Order not found");
        res.send(order);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.put('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).send("Order not found");
        res.send(order);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.delete('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndRemove(req.params.id);
        if (!order) return res.status(404).send("Order not found");
        res.send(order);
    } catch (err) {
        res.status(400).send("Invalid ID");
    }
});

app.use((req, res) => {
    res.status(404).send("Sorry, can't find that!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/healthcheck', (req, res) => res.send('Server is healthy!'));
for (let i = 0; i < 50; i++) {
    app.get(`/route${i}`, (req, res) => res.send(`Route ${i}`));
}
