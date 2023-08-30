const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();

//EMPLOY SCHEMA
const schema = new mongoose.Schema({
  name: String,
  user: String,
  password: String,
  userManagment: [String]
});

//EMPLOY MODEL
const model = mongoose.model("employ", schema);

//POST: TRIED LOGIN AND RETURN IF CREDENTIALS ARE VALID
router.post("/login",jsonParser, async (req, res) => {
  let userFound = await model.find({
    user: req.body.user,
    password: req.body.password
  })
  console.log(userFound)
  if(userFound.length != 0){
    res.status(200).send({message: "user found"});
  }else{
    res.status(500).send({message: "user not found"});
  }
})

module.exports = router;
