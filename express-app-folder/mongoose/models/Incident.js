const mongoose = require("mongoose");

const modelName = "Incident";

const { Schema } = mongoose;

const schema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  serverity: String,
  priority: String,
  reportedby: String,
  assignedTo: String
});

const Incident = mongoose.model(modelName, schema);

module.exports = Incident;
