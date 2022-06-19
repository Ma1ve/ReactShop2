const express = require('express');
// const mongoose = require('mongoose');
const sequelize = require('./utils/database');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/assets'));

app.use('/api/planes', require('./routes/planes'));

app.listen(port, () => {
  console.log(`Server start on ${port}`);
  sequelize.sync();
});
