const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const jsonParser = bodyParser.json();

let employs = [
  {
    id: "1",
    name: "Marco",
    surname: "Rossi",
    user: "aaaa",
    password: "password",
    yourUsers: [
        "1001"
    ]
  },
  {
    id:"2",
    name: "Mattia",
    surname: "Bianchi",
    user: "bbbb",
    password: "password2",
    yourUsers: [
        "1002"
    ]
  }
];

//employ schema
const schema = new mongoose.Schema({
  name: String,
  user: String,
  password: String,
  userManagment: [String]
});

//employ model
const model = mongoose.model("employ", schema);

router.get("/allEmploys", async (req, res) => {
    res.send(await model.find());
})

router.post("/login",jsonParser, async (req, res) => {
  let userFound = await model.find({
    user: req.body.user,
    password: req.body.password
  })
  console.log(userFound)
  if(userFound.length != 0){
    res.send({connect: true, message: "user found"});
  }else{
    res.send({connect: false,message: "user not found"});
  }
})

module.exports = router;
