const mongoose = require("mongoose");

const modelName = "Incident";

const { Schema } = mongoose;

const schema = new Schema({
  name:{
    type:String, 
    required: true
},
description:{
    type:String,
    required: true
},
serverity:{
    type:String,
    required: true
},
priority:{
    type:String,
    required: true
},
reportedby:{
    type:String,
    required: true
},
assignedTo:{
    type:String,
    required: true
}
});

const Incident = mongoose.model(modelName, schema);

module.exports = Incident;
