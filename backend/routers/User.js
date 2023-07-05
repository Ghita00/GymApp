const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const jsonParser = bodyParser.json();

//user schema
const schema = new mongoose.Schema({
  name: String,
  surname: String,
  description: String,
  inscriptionDate: String,
  lastCardDate: String,
  cardsId: [String]
});

//employ model
const model = mongoose.model("users", schema);

//return all users
router.get("/allUsers", async (req, res) => {
  res.send(await model.find());
});

//create a new user
router.post("/createUser", jsonParser, async (req, res) => {
  console.log(req.body);
  let e = await model.insertMany([req.body]);
  if(e){
    res.send({ succ: "insert completed" });
  }else{
    res.send({neg: "an error occurred"});
  }
});

//filter user by name
router.post("/filterUserByName", jsonParser, async (req, res) => {
  res.send(await model.find({name: req.body.user}));
})

//filter user by id
router.post("/filterUserById", jsonParser, async (req, res) => {
  res.send(await model.findById(req.body.id));
})

module.exports = router;