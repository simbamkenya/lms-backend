const express = require('express');
const router = express.Router();
const Lent = require('../models/Lent')


//fetch borrowed books
router.get('/', async(req, res) => {
    const lentList = await Lent.find();
    if(!lentList) return  res.status(500).json({sucess: false})
    
    res.status(200).send(lentList)
})


//fetch books for single users
router.get('/:id', async (req, res) => {
    const bookList = Lent.findById(req.params.id)
    if(!bookList) return res.status(200).send('users has no rented books')

    res.status(200).send(bookList)
})



module.exports = router;