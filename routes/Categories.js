const express = require('express');
const router = express.Router();
const Category = require('../models/Category')

//fetch all categories
router.get('/', async(req, res) => {
    const categoryList = await Category.find();
    if(!categoryList) return  res.status(500).json({success: false})

    res.send(categoryList)
})

//fetch specific category 
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if(!category) return  res.status(500).send({success: false})

    res.send(category)
})


//create category 
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    let category = new Category({ name, description })
 
     category = await category.save();
     if(!category) return res.status(500).send('category not created')
 
     res.status(200).send(category) 
})


//update 
router.put('/:id', async() => {
    const category = await Category.findById(req.params.id);
    if(!category) return  res.status(500).json({success: false})

    const { name, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name, description }, { new: true})
    
    if(!updatedCategory) return res.status(500).send('the category cannot be updated')
    res.send(updatedCategory)
})

//delete category 
router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if(!category) return res.status(404).send('the category was not deleted')

    res.status(200).send('category was deleted')
})






module.exports = router;