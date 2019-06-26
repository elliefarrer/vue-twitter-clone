/* eslint-disable no-console */
const Post = require('../models/post');
const User = require('../models/user');

const { dbURI } = require('../config/env');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

User.collection.drop();
Post.collection.drop();

const userIds = ['5b90faba6164a88ac1374928', '5b90faba6164a88ac1374929', '5b90faba6164a88ac1374920', '5b90faba6164a88ac137492a'];

const userData = [
    {
        _id: userIds[0],
        username: 'EllDawg',
        displayName: 'Ellie',
        email: 'ellie@platyp.com',
        password: 'Pass1234',
        passwordConfirmation: 'Pass1234'
    },
    {
        _id: userIds[1],
        username: 'iamgroot',
        displayName: 'Groot',
        email: 'groot@platyp.com',
        password: 'Pass1234',
        passwordConfirmation: 'Pass1234'
    },
    {
        _id: userIds[2],
        username: 'iaminevitable',
        displayName: 'Thanos',
        email: 'thanos@platyp.com',
        password: 'Pass1234',
        passwordConfirmation: 'Pass1234'
    }
];

const postData = [
    {
        user: userIds[0],
        content: 'I don\'t feel so good',
        timestamp: new Date()
    },
    {
        user: userIds[1],
        content: 'I am Groot',
        timestamp: new Date()
    },
    {
        user: userIds[2],
        content: 'Perfectly balanced, as things should be',
        timestamp: new Date()
    }
];


User
    .create(userData)
    .then(users => {
        console.log(`Created ${users.length} users 👨‍💻👩‍💻`);
        return Post.create(postData);
    })
    .then(posts => console.log(`Created ${posts.length} posts 💬`))
    .catch(err => console.log('There was an error', err))
    .finally(() => mongoose.connection.close());