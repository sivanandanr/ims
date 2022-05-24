const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  res.status(404).send("Sorry can't find that!----------------------------------------------------")
});

module.exports = router;
