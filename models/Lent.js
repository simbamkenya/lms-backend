const mongoose = require('mongoose')

const LentSchema = new mongoose.Schema({
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    dateBorrowed: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dateReturn: {
        type: Date,
        required: false,
    }    
})

exports.Lent = mongoose.model('Lent', LentSchema);