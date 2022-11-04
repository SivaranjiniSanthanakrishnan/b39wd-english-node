const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./connect");
const EmployeeRouter = require("./router/EmployeeRouter");

dotenv.config();
mongo.connect();

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Authenticate");
  next();
});

app.use("/employee", EmployeeRouter);

app.listen(process.env.PORT);
