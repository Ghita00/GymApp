const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();

//EXERCISE_IN_CARD SCHEMA
const schema = new mongoose.Schema({
    idCard: String,
    idExercise: String,
    rep: Number,
    times: Number
});

//EXERCISE_IN_CARD MODEL
const model = mongoose.model("exercise_in_card", schema);

module.exports = router;