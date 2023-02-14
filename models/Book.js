const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
   books: [
    {
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    }
   ]
    
    
})


exports.Book = mongoose.model('Book', BookSchema);