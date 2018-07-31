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
    Blogs.create(req.body).then(function (data) {
        res.json({ data: "blog saved successfully!" })
    })
})

// delete blog
router.delete("/posts/:id", function (req, res) {
    Blogs.findByIdAndRemove({ _id: req.params.id }).then(function (todo) {
        res.send({ blog: "blog has been deleted" });
    });
})

// update blogs
router.put("/posts/:id", function (req, res, next) {
    Blogs.findByIdAndUpdate(req.params.id, req.body).then(function (data) {
        res.json({ data: "blog update successfully" })
    })
})


module.exports = router 
