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

async function insertUser(){
  console.log("Test insert");
  await new model({
    name: "test",
    user: "spero funzioni",
    password:"aaa",
    userManagment: []
  }).save();
}

router.get("/allEmploys", async (req, res) => {
    //insertUser();
    //res.send(employs);
    res.send(await model.find());
})

router.post("/login",jsonParser, (req, res) => {
  if(req.body.user && req.body.password){
    for(let employ of employs){
      if(employ.user == req.body.user){
        if(employ.password == req.body.password){
          res.send({connect: true, message: "user found"});
        }else{
          res.send({connect: false,message: "user not found"});
        }
      }
    }
    res.send({connect: false,message: "user not found"});
  }
  res.send({connect: false,message: "user not found"});
})

module.exports = router;
