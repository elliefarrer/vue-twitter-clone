const express = require('express');
const app = express();

const morgan = require('morgan');

const { port } = require('./config/env');

app.use(morgan('dev'));

app.listen(port, () => console.log(`I'm hungry, feed me on port ${port} 😋`));