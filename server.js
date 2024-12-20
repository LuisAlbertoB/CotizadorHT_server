require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./src/models');

const PORT = process.env.PORT || 3000;

db.sequelize.sync()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch(err => console.log('Error connecting to the database:', err));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
