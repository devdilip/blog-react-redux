const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogsSchema = new Schema({
    _id:{
        type:String,
        required:[true,"id is required"]
    },
    title:{
        type:String,
        required:[true,"title is required"]
    },
    author:{
        type:String,
        required:[true,"author is required"]
    },
    description:{
        type:String,
        // required:[true,"blog is required"]
    }
})

Blogs = mongoose.model("blogs",BlogsSchema);
module.exports = Blogs;