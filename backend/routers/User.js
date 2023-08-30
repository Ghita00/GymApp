const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();

//USER SCHEMA 
const schema = new mongoose.Schema({
  name: String,
  surname: String,
  bornDate: Date,
  street: String,
  city: String,
  province: String,
  description: String,
  inscriptionDate: Date,
  lastCardDate: Date,
  kg: Number,
  height: Number,
  image: String,
  cardsId: [String]
});

//USER MODEL
const model = mongoose.model("users", schema);

//GET: ALL USERS
router.get("/allUsers", async (req, res) => {
  res.status(200).send(await model.find());
});

//POST: CREATE A NEW USER AND RETURN OUTCOME
router.post("/createUser", jsonParser, async (req, res) => {
  console.log(req.body);
  let newUser = await model.insertMany([req.body]);
  if(newUser){
    res.status(200).send({message: "insert completed" });
  }else{
    res.status(500).send({message: "an error occurred"});
  }
});

//GET: FILTER USERS BY NAME
router.post("/filterUserByName", jsonParser, async (req, res) => {
  res.status(200).send(await model.find({name: req.body.user}));
})

//GET: FILTER USERS BY ID
router.post("/filterUserById", jsonParser, async (req, res) => {
  res.status(200).send(await model.findById(req.body.id));
})

module.exports = router;