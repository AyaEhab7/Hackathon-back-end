require('dotenv').config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');
const verifyToken = require('./middleware/verify-token');
const cors = require('cors');

//controllers:
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');
const profilesRouter = require('./controllers/profiles');
const productsRouter = require('./controllers/product.js');


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

// Routes go here
app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);

//Protected
app.use(verifyToken);
app.use('/profiles', profilesRouter);
app.use('/products', productsRouter);


app.listen(3000, () => {
  console.log('The express app is ready!');
});