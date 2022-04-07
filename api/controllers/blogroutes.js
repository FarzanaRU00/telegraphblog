const express = require("express");
const router = express.Router();

const Blogs = require('../models/blogs')

// get the base route for the blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blogs.all
        res.json({blogs})
    } catch(err) {
        res.status(500).json({err})
    }
})

// create a route for blogs
router.post('/', async (req,res) => {
    try {
        const blogs = await Blogs.create(req.body.title, req.body.name, req.body.content, req.body.year, req.body.month, req.body.day)
        res.json(blogs)
    } catch(err) {
        res.status(404).json({err})
    }
})

// show the route for blogs
router.get('/:id', async (req, res) => {
    try {
        const blogs = await Blogs.findById(parseInt(req.params.id))
        res.json(blogs)
    } catch (err) {
        res.status(404).json({err})
    }
})

// update the route for blogs
router.patch('/:id', async (req, res) => {
    try {
        const blogs = await Blogs.findById(parseInt(req.params.id))
        const updateBlogs = await blogs.update(req.body.title, req.body.name, req.body.content, req.body.year, req.body.month, req.body.day)
        res.json({blogs: updatedBlogs})
    } catch (err) {
        res.status(500).json({err})
    }
})

// delete the route for blogs
router.delete('/:id', async(req, res) => {
    try {
        const blogs = await Blogs.findById(parseInt(req.params.id))
        await blogs.destroy()
        res.status(204).json('Blog Deleted')
    } catch (err) {
        res.status(500).json({err})
    }
})

module.exports = router;