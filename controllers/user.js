const User = require('../models/user');

function userIndex(req, res, next) {
    User
        .find()
        .then(users => res.json(users))
        .finally(next);
}

function userShow(req, res, next) {
    User
        .findById(req.params.userId)
        .populate('posts.postId', 'content timestamp')
        .then(user => res.json(user))
        .finally(next);
}

module.exports = {
    index: userIndex,
    show: userShow
}