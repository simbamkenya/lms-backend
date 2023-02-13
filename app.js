const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

require('dotenv/config');

const app = express();

//middlewares
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('hello from the boss')
})


app.listen(3000, () => {
    console.log('server is running on 3000')
})