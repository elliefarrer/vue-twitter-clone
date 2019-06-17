const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    posts: [
        {
            postId: { type: mongoose.Schema.ObjectId, ref: 'Post' }
        }
    ]
})

module.exports = mongoose.model('User', userSchema);