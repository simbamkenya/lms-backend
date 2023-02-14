const express = require('express');
const router = express.Router();
const Book = require('../models/Book');




//fetch all books
router.get('/', async (req, res) => {
    const bookList = await Book.find();
    if(!bookList) return res.status(500).json({success: false})
    res.send(bookList)
})


//fetch specific book
router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
    if(!book) return res.status(200).send('the book with given id was not found');
    res.status(200).send(book)
})

//create category
router.post('/', async(req, res) => {
    const { title, author, publisher, category } = req.body;
     let book = new Book({ title, author, publisher, category })
 
     book = await book.save();
     if(!book) return res.status(500).send('book not created')
 
     res.status(200).send(book) 
})

//delete a book
router.delete('/:id', async (req, res) => {
    const book = await Book.findAndRemove(req.params.id)
    if(!book) return res.status(404).send('the book with given id was not deleted')

    res.status(200).send(book)
})


//update a book details 
router.put('/:id', async (req, res) => {
  const bookCategory = await Book.findById(req.body.category);
  if(!bookCategory) return res.status(400).send('Invalid Category')

  const { title, author, publisher, category } = req.body;
  const book = await Book.findByIdAndUpdate(req.params.id, { title, author, publisher, category }, { new: true})
  
  if(!book) return res.status(500).send('the book cannot be updated')
  res.send(book)
})


module.exports = router;

