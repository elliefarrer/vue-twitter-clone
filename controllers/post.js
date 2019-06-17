const Post = require('../models/post');

function postIndex(req, res, next) {
    Post
        .find()
        .populate('user')
        .then(posts => res.json(posts))
        .finally(next);
}

function postShow(req, res, next) {
    Post
        .findById(req.params.postId)
        .populate('user')
        .then(post => res.json(post))
        .catch(next);
}

module.exports = {
    index: postIndex,
    show: postShow
};