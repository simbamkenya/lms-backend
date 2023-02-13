const mongoose = require('mongoose')

const BorrowingSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
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

exports.Borrow = mongoose.model('Borrow', BorrowingSchema);