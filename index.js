const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

const { dbURI, port } = require('./config/env');
const Router = require('./config/router');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', Router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`I'm hungry, feed me on port ${port} 😋`));