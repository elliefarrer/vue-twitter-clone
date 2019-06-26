const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// Virtuals
userSchema.virtual('passwordConfirmation')
    .set(function(passwordConfirmation) {
        this._passwordConfirmation = passwordConfirmation;
    })


// Lifecycle Hooks
userSchema.pre('validate', function (next) {
    if (this.isModified('password')) {
        if (!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
            // eslint-disable-next-line no-console
            console.log('Passwords do not match');
            this.invalidate('Password confirmation', 'does not match');
        }
        next();
    }
});

userSchema.pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    next();
});


// Methods
userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);