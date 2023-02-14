const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    borrowedBooks: {
        type: mongoose.Types.ObjectId,
        ref: 'Lent'
    }
})

exports.User = mongoose.model('User', UserSchema);