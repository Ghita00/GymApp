const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

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

const mongoose = require("mongoose");

const jsonParser = bodyParser.json();

//card schema
const schema = new mongoose.Schema({
  name: String,
  description: String,
  pubDate: String,
  modDate: String,
  color: String,
  exercises: [{
    name: String,
    rep: String,
    series: String,
    description: String,
    influenceArea: [String],
  }]
});

//employ model
const model = mongoose.model("cards", schema);

//return all cards by a user
router.get("/allCards", async (req, res) => {
  res.send(await model.find());
});

//return detail of single card by a user
router.get("/detailCard", async (req, res) => {
  res.send(await model.findById(req.query.card));
});

//create a new card for a user
router.post("/createCard", async (req, res) => {
  console.log(req.body);
  let e = await model.insertMany([req.body]);
  if(e){
    res.send({ succ: "insert completed" });
  }else{
    res.send({neg: "an error occurred"});
  }
});

module.exports = router;
