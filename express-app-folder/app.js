const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');

const indexRouter = require("./routes/index");
const incidentsRouter = require("./routes/Incident-routes");

const app = express();

const attemptMongooseConnection = require("./mongoose/setup");

// this should match the name of the service specified for mongo image in ../docker-compose.yml
const mongoDbHost = "imsmongodb";
// this should match what is specified in ../docker-compose.yml
const mongoDbPort = 27017;
const mongoDbName = "some-db";

attemptMongooseConnection(mongoDbHost, mongoDbPort, mongoDbName);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true }));
app.use("/", indexRouter);
app.use("/incidents", incidentsRouter);
// resolve CORS error(s) so React can call server with different HTTP methods during development
app.use(function (req, res, next) {
  console.log(req);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
});

app.use(logger("dev"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



module.exports = app;
