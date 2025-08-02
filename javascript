const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // For parsing JSON bodies

// In a real app, this would come from a database.
const products = [
  // your product data here...
];

// API endpoint for all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint for a single product
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Simple order processing endpoint
app.post('/api/checkout', (req, res) => {
    // In a real app, you'd process payment, save to DB, etc.
    console.log('Order received:', req.body);
    res.status(200).send('Order placed successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
