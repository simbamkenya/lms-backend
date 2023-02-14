const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const { route } = require('./Books');

//fetch inventory
router.get('/', async(req, res) => {
    const inventory = await Inventory.find()
    if(!inventory) return res.status(500).send('the library has no books')

    res.status(200).send(inventory)
})

//create an inventory 
router.post('/:id', async (req, res) => {
    
})



module.exports = router;