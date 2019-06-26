const express = require('express');
const Router = express.Router();

const postController = require('../controllers/post');
const userController = require('../controllers/user');
const authController = require('../controllers/auth');

////////////////////// POSTS ////////////////////////////////
Router.route('/posts')
    .get(postController.index)
    .post(postController.create);

Router.route('/posts/:postId')
    .get(postController.show)
    .put(postController.update)
    .delete(postController.delete);


///////////////////// USERS ////////////////////////////////
Router.route('/users')
    .get(userController.index);

Router.route('/users/:userId')
    .get(userController.show);


/////////////////////// AUTH ////////////////////////////
Router.route('/register')
    .post(authController.register);

Router.route('/login')
    .post(authController.login);

module.exports = Router;