const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    book: [{
            type: mongoose.Types.ObjectId,
        ref: 'Book'
    }],
    quantity: {
        type: Number,
        required: true
    }
})

exports.Inventory = mongoose.model('Inventory', InventorySchema);