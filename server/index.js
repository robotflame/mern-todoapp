const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.post('/add', (req, res) => {
  const task = req.body.task;
  
  res.send({ message: 'Task received', task });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
