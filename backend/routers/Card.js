const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();
const ObjectId = require('mongodb').ObjectId;

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
router.get("/detailCard", jsonParser, async (req, res) => {
  let idCard = req.body.idCard;
  console.log(idCard)
  let cardDetail = await model.findById(idCard);

  if(!cardDetail || cardDetail.length == 0){
      res.status(500).send({message: "an error occurred"});
  }else{
      res.status(200).send(cardDetail);
  }  
});

//POST: CREATE A NEW CARD AND RETURN OUTCOME
router.post("/createCard", jsonParser, async (req, res) => {
  let newCard = await model.insertMany([req.body]);
  if(newCard){
    res.status(200).send({message: newCard });
  }else{
    res.status(500).send({message: "an error occurred"});
  }
});

module.exports = router;
