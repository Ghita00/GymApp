const bodyParser = require('body-parser');
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();
const ObjectId = require('mongodb').ObjectId;

//EMPLOY SCHEMA
const schema = new mongoose.Schema({
  name: String,
  user: String,
  password: String,
  userManagment: [String]
});

//EMPLOY MODEL
const model = mongoose.model("employer", schema);

//POST: TRIED LOGIN AND RETURN IF CREDENTIALS ARE VALID
router.post("/login", jsonParser, async (req, res) => {
  console.log({
    user: req.body.user,
    password: req.body.password
  })
  let userFound = await model.find({
    user: req.body.user,
    password: req.body.password
  })
  console.log(userFound)
  if(userFound && userFound.length > 0){
    res.status(200).send({message: userFound});
  }else{
    res.status(500).send({message: "user not found"});
  }
})

//POST: CREATE EMPLOYED
router.post("/createEmployer", jsonParser, async(req, res) => {
  let newEmployer = await model.insertMany(req.body.newUser)
  if(newEmployer && newEmployer.length > 0){
    res.status(200).send({message: newEmployer});
  }else{
    res.status(500).send({message: "an error occurred"});
  }
})

//PUT: ADD USER MANAGMENT
router.put("/addUserManagment", jsonParser, async(req, res) => {
  let idEmployer = req.body.idEmployer;
  let idUser = req.body.idUser;

  let employer = await model.findById({_id:new ObjectId(idEmployer)})
  if(!employer || employer.length == 0){
    res.status(500).send({message: "an error occurred"});
  }else{
    employer.userManagment.push(idUser)
    await model.deleteOne({_id:new ObjectId(idEmployer)}); 
    let newUserManagment = await model.insertMany(employer); 

    if(newUserManagment && newUserManagment.length > 0){
      res.status(200).send({message: employer});
    }else{
      res.status(500).send({message: "an error occurred"});
    }
  }
  
})

//PUT: CHANGE EMPLOYER INFORMATION
router.put("/changeEmployerInformation", jsonParser, async(req, res) => {
  let newEmployer = req.body.newEmployer;
  let oldEmployer = await model.findById({_id:new ObjectId(newEmployer._id)})
  await model.deleteOne(oldEmployer); 
  let newEmployerInsert = await model.insertMany(newEmployer);

  if(newEmployerInsert && newEmployerInsert.length > 0){
    res.status(200).send({message: newEmployerInsert});
  }else{
    res.status(500).send({message: "an error occurred"});
  }
})

//DELETE: REMOVE USER MANAGMENT
router.delete("/removeUserManagment", jsonParser, async(req, res) => {
  let idEmployer = req.body.idEmployer;
  let idUser = req.body.idUser;
  let employer = await model.findById({_id:new ObjectId(idEmployer)})
  
  if(!employer || employer.length == 0){
    res.status(500).send({message: "an error occurred"});
  }else{
    employer.userManagment = employer.userManagment.filter(id => id != idUser)
    await model.deleteOne({_id:new ObjectId(idEmployer)});
    let newUserManagment = await model.insertMany(employer); 

    if(newUserManagment && newUserManagment.length > 0){
      res.status(200).send({message: employer});
    }else{
      res.status(500).send({message: "an error occurred"});
    }
  }
})

//DELETE: REMOVE EMPLOYER
router.delete("/removeEmployer", jsonParser, async(req, res) => {
  let idEmployer = req.body.idEmployer;
  let oldEmployer = await model.find({_id:new ObjectId(idEmployer)})
  await model.deleteOne({_id:new ObjectId(idEmployer)}); 

  if(oldEmployer && oldEmployer.length > 0){
    res.status(200).send({message: oldEmployer});
  }else{
    res.status(500).send({message: "an error occurred"});
  }
})

module.exports = router;
