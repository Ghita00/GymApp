const express = require("express");
const router = express.Router();

let users = [
  {
    id: "1001",
    name: "Giorgio",
    surname: "Basile",
    description: "Ragazzo di 22 anni che frquenta palestra per la prima volta",
    inscriptionDate: "10/05/2023",
    lastCardDate: "20/06/2023",
    cardsId: ["0001"],
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

//return one single user
router.get("/singleUses", (req, res) => {
  console.log("[SERVER] " + req.query.user);
  for (let user of users) {
    if (user.id == req.query.user) {
      res.send(user);
    }
  }
  res.send({ err: "error" });
});

//create a new user
router.post("/createUser", (req, res) => {
  cards.push(req.body);
  res.send({ succ: "insert completed" });
});

module.exports = router;