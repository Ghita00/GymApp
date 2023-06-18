const express = require("express");
const router = express.Router();

let cards = [
  {
    id: "0001",
    name: "scheda 1",
    desc: "scheda di attivazione",
    pubDate: "10/05/2023",
    modDate: "20/06/2023",
    color: "#e1b5a2",
    exercises: [
      {
        name: "Lat",
        rep: "15",
        series: "3",
        description:
          "Esercizio svolto con la lat machine e serve per la schiena",
        influenceArea: ["Schiena"],
      },
      {
        name: "Croci",
        rep: "10",
        series: "4",
        description: "Esercizio svolto con i manubri per il petto",
        influenceArea: ["Petto", "Schiena", "Testa", "Glutei"],
      }
    ],
  },
  {
    id: "0002",
    name: "scheda 2",
    desc: "scheda delle braccia",
    pubDate: "18/09/2023",
    modDate: "20/09/2023",
    color: "#e1b5a2",
    exercises: [
      {
        name: "Croci",
        rep: "10",
        series: "4",
        description: "Esercizio svolto con i manubri per il petto",
        influenceArea: ["Petto"],
      },
    ],
  },
];

//return all cards by a user
router.get("/allCards", (req, res) => {
  res.send(cards);
});

//return detail of single card by a user
router.get("/detailCard", (req, res) => {
  console.log("[SERVER] " + req.query.card);
  for (let card of cards) {
    console.log("[SERVER] say " + card.id);
    if (card.id == req.query.card) {
      res.send(card);
    }
  }
  res.send({ err: "error" });
});

//create a new card for a user
router.post("/createCard", (req, res) => {
  cards.push(req.body);
  res.send({ succ: "insert completed" });
});

module.exports = router;
