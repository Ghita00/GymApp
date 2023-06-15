const express = require("express");
const router = express.Router();

let employs = [
  {
    name: "Marco",
    surname: "Rossi",
    user: "aaaa",
    password: "password",
    yourUsers: [
        "1001"
    ]
  },
  {
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
    res.send(employs)
})

module.exports = router;
