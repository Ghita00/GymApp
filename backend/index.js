const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//connecting to db
mongoose.connect(
  "mongodb://127.0.0.1:27017/gymApp"
)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

//require route
const cardRoute = require("./routers/Card.js");
const userRoute = require("./routers/User.js");
const employRoute = require("./routers/Employer.js");
const exerciseRoute = require("./routers/Exercise.js");
const exerciseIncardRoute = require("./routers/ExerciseInCard.js");

//setup server
const app = express();
const port = 8000;
app.use(
  cors({
    origin: "http://localhost:4200",
  }) 
); 
app.use(userRoute);
app.use(cardRoute);
app.use(employRoute);
app.use(exerciseRoute);
app.use(exerciseIncardRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
