const express = require("express");

const router = express.Router();

const Incident = require("../mongoose/models/Incident");

router.get("/", async function (req, res, next) {
  console.log("-----------------------------------------------------------------------------------------------");
  console.log(req);
  const allIncidents = await Incident.find({});
  res.send(allIncidents);
});

router.post("/", function (req, res, send) {
  console.log("-----------------------------------------------------------------------------------------------");
  console.log(req.body);
  console.log("-----------------------------------------------------------------------------------------------");
  let newIncident = new Incident({
    name:req.body.name,
    description:req.body.description,
    serverity:req.body.serverity,
    priority:req.body.priority,
    reportedby:req.body.reportedby,
    assignedTo:req.body.assignedTo
  });
  console.log(newIncident);
  newIncident.save().then(() => {
    res.sendStatus(200);
  });
});

router.put("/:id", async function (req, res, send) {
  const id = req.params.id;
  Incident.replaceOne({ _id: id }, req.body).then(() => res.sendStatus(200));
});

router.delete("/:id", async function (req, res, send) {
  const id = req.params.id;
  Incident.deleteOne({ _id: id }).then(() => res.sendStatus(200));
});

module.exports = router;
