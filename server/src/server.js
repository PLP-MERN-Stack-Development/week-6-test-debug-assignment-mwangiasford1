const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mern-app')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('MongoDB connected');
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  }); 