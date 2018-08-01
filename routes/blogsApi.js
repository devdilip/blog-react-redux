const express = require("express");
const router = express.Router();


const Blogs = require("../models/blogs")

// Fetch All Data
router.get("/posts", function (req, res, next) {
    Blogs.find({}).then(function (data) {
        res.send(data);
    })
})

// search by id
router.get("/posts/:id", function (req, res, next) {
    Blogs.findOne({_id:req.params.id}).then(function (data) {
        res.json(data);
    })
})

// save blogs
router.post("/posts", function (req, res, next) {
    Blogs.create(req.body.data).then(function (data) {
        res.json(data)
    })
})

// delete blog
router.delete("/posts/:id", function (req, res) {
    Blogs.findByIdAndRemove({ _id: req.params.id }).then(function (data) {
        res.send(req.params.id);
    });
})

// update blogs
router.put("/posts/:id", function (req, res, next) {
    const id = req.params.id;
    const description = req.body.data.description;
    Blogs.findByIdAndUpdate(id,{ description: description }).then(function (posts) {
        res.json({id:id,description:description})
    })
})


module.exports = router 
