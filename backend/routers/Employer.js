const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();

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

router.get("/allEmploys", (req, res) => {
    res.send(employs);
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
