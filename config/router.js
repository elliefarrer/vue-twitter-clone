const express = require('express');
const Router = express.Router();

const postController = require('../controllers/post');
const userController = require('../controllers/user');

////////////////////// POSTS ////////////////////////////////
Router.route('/posts')
    .get(postController.index);

Router.route('/posts/:postId')
    .get(postController.show);


///////////////////// USERS ////////////////////////////////
Router.route('/users')
    .get(userController.index);

Router.route('/users/:userId')
    .get(userController.show);

module.exports = Router;