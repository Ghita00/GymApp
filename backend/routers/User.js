const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();

const jsonParser = bodyParser.json();

let users = [
  {
    id: "1001",
    name: "Giorgio",
    surname: "Basile",
    description: "Ragazzo di 22 anni che frquenta palestra per la prima volta",
    inscriptionDate: "10/05/2023",
    lastCardDate: "20/06/2023",
    cardsId: ["0001", "0002"],
  },
  {
    id: "1002",
    name: "Antonio",
    surname: "Franchi",
    description: "Ragazzo di 25 anni molto ben allenato",
    inscriptionDate: "15/05/2022",
    lastCardDate: "12/07/2023",
    cardsId: ["0002"],
  },
];

//return all users
router.get("/allUsers", (req, res) => {
  res.send(users);
});

//create a new user
router.post("/createUser", jsonParser, (req, res) => {
  console.log(req.body)
  users.push(req.body);
  console.log("[SERVER] insert "+ users);
  res.send({ succ: "insert completed" });
});

//filter user by name
router.post("/filterUserByName", jsonParser, (req, res) => {
  const name = req.body.user;
  let listOfuser = [];
  for(let user of users){
    console.log("[SERVER] "+ user.name + ', ' + name);
    if(user.name == name){
      listOfuser.push(user);
    }
  }
  res.send(listOfuser);
})

//filter user by id
router.post("/filterUserById", jsonParser, (req, res) => {
  const id = req.body.id;
  let userFind = null;
  for(let user of users){
    console.log("[SERVER] "+ user.id + ', ' + id);
    if(user.id == id){
      userFind = user;
    }
  }
  res.send(userFind);
})

module.exports = router;