const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/BlogsDB", { useNewUrlParser: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 5566;
app.use(bodyParser.json());

app.use("/", require("./routes/blogsApi"));

app.use(express.static("build"));
app.use(express.static("build/static"));

app.get('*', function (req, res) {
    res.sendFile(__dirname + "/build/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`))