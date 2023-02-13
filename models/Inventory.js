const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

exports.Inventory = mongoose.model('Inventory', InventorySchema);