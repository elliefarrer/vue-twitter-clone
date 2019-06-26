/* eslint-disable no-console */
const jwt = require('jsonwebtoken');

const { secret } = require('../config/env');
const User = require('../models/user');

function createAndSendToken(user, res, message) {
    const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '1hr' });
    res.json({ message, token });
}

function register(req, res, next) {
    User
        .create(req.body)
        .then(user => createAndSendToken(user, res, `Hello, ${user.username}`))
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

function login(req, res, next) {
    User
        .findOne({ email: req.body.email })
        .then(user => {
            if (!user || !user.validatePassword(req.body.password)) {
                return res.status(401).json({ message: 'Unauthorised' });
            }
            createAndSendToken(user, res, `Welcome back, ${user.username}`);
        })
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

module.exports = {
    register: register,
    login: login
}