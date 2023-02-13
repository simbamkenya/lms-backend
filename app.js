const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv/config');


//ROUTES
const usersRouter = require('./routes/Users')
const booksRouter = require('./routes/Books')
const borrowsRouter = require('./routes/Borrows')
const inventoryRouter = require('./routes/Inventories')
const categoriesRouter = require('./routes/Categories')


const app = express();

//middlewares
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'))

app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/inventories', inventoryRouter);
app.use('/categories', categoriesRouter);


app.listen(3000, () => {
    console.log('server is running on 3000')
})