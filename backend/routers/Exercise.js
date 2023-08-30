const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();

//EXERCISE SCHEMA
const schema = new mongoose.Schema({
    name: String,
    description: String,
    area: [String]
});

//EXERCISE MODEL
const model = mongoose.model("exercise", schema);

module.exports = router;
