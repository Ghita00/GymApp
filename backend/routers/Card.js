const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();

//CARD SCHEMA
const schema = new mongoose.Schema({
  name: String,
  description: String,
  pubDate: Date,
  modDate: Date,
  color: String,
  EmployNameSurname:String,
});

//CARD MODEL
const model = mongoose.model("cards", schema);

//GET: RETURN ALL CARDS
router.get("/allCards", async (req, res) => {
  res.status(200).send(await model.find());
});

//GET: RETURN ALL CARD INFORMATION
router.get("/detailCard", async (req, res) => {
  res.status(200).send(await model.findById(req.query.card));
});

//POST: CREATE A NEW CARD AND RETURN OUTCOME
router.post("/createCard", async (req, res) => {
  console.log(req.body);
  let newCard = await model.insertMany([req.body]);
  //todo refactor!
  //todo add update owner of card
  if(newCard){
    res.status(200).send({message: "insert completed" });
  }else{
    res.status(500).send({message: "an error occurred"});
  }
});

module.exports = router;
