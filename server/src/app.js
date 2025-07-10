const express = require('express');
const postsRouter = require('./routes/posts');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/posts', postsRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app; 