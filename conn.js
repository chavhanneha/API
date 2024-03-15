const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apk')
  .then(() => console.log('Database is connected'))
  .catch(error => console.error('Database connection error:', error));