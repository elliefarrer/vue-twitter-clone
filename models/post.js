const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true, maxlength: 250 },
    timestamp: { type: String, required: true }
})

module.exports = mongoose.model('Post', postSchema);