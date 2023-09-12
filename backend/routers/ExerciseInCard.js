const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const jsonParser = bodyParser.json();
const ObjectId = require('mongodb').ObjectId;

//EXERCISE_IN_CARD SCHEMA
const schema = new mongoose.Schema({
    idCard: String,
    idExercise: String,
    rep: Number,
    times: Number
});

//EXERCISE_IN_CARD MODEL
const model = mongoose.model("exercise_in_card", schema);

//GET: RETURN ALL EXERCISE IN ONE CARD
router.get("/exerciseByIdCard", jsonParser, async(req, res) => {
    let idCard = req.body.idCard;
    let getCard = await model.find({idCard:new ObjectId(idCard)});
    
    if(getCard && getCard.length > 0){
        res.status(200).send({message: getCard});
    }else{
        res.status(500).send({message: "an error occurred"});
    }
})

//POST: ADD LIST OF EXERCISE IN THE COLLECTION
router.post("/insertExercise", jsonParser, async (req, res) => {
    let exercises = req.body.exercises;
    let exercisesInserted = []

    for(let i = 0; i < exercises.length; i++){
        let newExercise = await model.insertMany(exercises[i]);
        if(!newExercise){
            res.status(500).send({message: "an error occurred"});
        }else{
            exercisesInserted.push(newExercise);
            console.log(exercisesInserted)
        }
    }

    res.status(200).send({message: exercisesInserted});
});

//PUT: INSERT NEW EXERCISE IN THE EXERCISES POOL
router.put("/insertNewExercise", jsonParser, async (req, res) => {
    let exercise = req.body.exercise;
    console.log(exercise)
    let newExercise = await model.insertMany(exercise);
    if(!newExercise){
        res.status(500).send({message: "an error occurred"});
    }else{
        res.status(200).send(newExercise)
    }    
}); 

//PUT: CHANGE PARAMS OF EXERCISE IN THE CARD
router.put("/changeParamExerciseInCard", jsonParser, async (req, res) => {
    let exercise = req.body.exercise;    
    let idExercise = exercise.idExercise;
    let idCard = exercise.idCard;

    let oldExercise = await model.find({idCard:new ObjectId(idCard), idExercise: ObjectId(idExercise)});
    await model.findOneAndDelete({idCard:new ObjectId(idCard), idExercise: ObjectId(idExercise)});
    if(!oldExercise){
        res.status(500).send({message: "an error occurred"});
    }

    let newExercise = await model.insertMany(exercise);
    if(!newExercise){
        res.status(500).send({message: "an error occurred"});
    }else{
        res.status(200).send(newExercise)
    } 
}); 


//DELETE: REMOVE ONCE EXERCISE FROM THE CARD
router.delete("/removeExerciseInCard", jsonParser, async (req, res) => {
    let idExercise = req.body.idExercise;
    let idCard = req.body.idCard;
    let oldExercise = await model.find({idCard:new ObjectId(idCard), idExercise: ObjectId(idExercise)});
    await model.findOneAndDelete({idCard:new ObjectId(idCard), idExercise: ObjectId(idExercise)});
    if(!oldExercise){
        res.status(500).send({message: "an error occurred"});
    }else{
        res.status(200).send(oldExercise);
    }  
}); 




module.exports = router;