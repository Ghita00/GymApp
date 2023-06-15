const express = require("express");
const cors = require("cors");

//require route
const cardRoute = require("./routers/Card.js");
const userRoute = require("./routers/User.js");
const employRoute = require("./routers/Employer.js");

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
app.use(employRoute)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
