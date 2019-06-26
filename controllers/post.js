/* eslint-disable no-console */
const Post = require('../models/post');

function postIndex(req, res, next) {
    Post
        .find()
        .populate('user')
        .then(posts => res.json(posts))
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

function postShow(req, res, next) {
    Post
        .findById(req.params.postId)
        .populate('user')
        .then(post => res.json(post))
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

function postCreate(req, res, next) {
    Post
        .create(req.body)
        .then(post => res.status(201).json(post))
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

function postUpdate(req, res, next) {
    Post
        .findById(req.params.postId)
        .then(post => post.set(req.body))
        .then(post => post.save())
        .then(post => res.status(200).json(post))
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

function postDelete(req, res, next) {
    Post
        .findById(req.params.postId)
        .then(post => post.remove())
        .then(() => res.sendStatus(204))
        .catch(err => console.log('There was an error', err))
        .finally(next);
}

module.exports = {
    index: postIndex,
    show: postShow,
    create: postCreate,
    update: postUpdate,
    delete: postDelete
};