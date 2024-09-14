const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Backend!' });
});

app.listen(3000, () => {
  console.log('Backend is running on port 3000');
});