var express = require("express");

var router = express.Router();

// Import the model (flashcard.js) to use its database functions.
var flashcard = require("../models/flashcard.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    flashcard.all(function(data) {
    var hbsObject = {
        flashcards: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/flashcards", function(req, res) {
    flashcard.create([
    "question", "english"
  ], [
    req.body.question, req.body.english
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/flashcards/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  flashcard.update({
    english: req.body.english
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/flashcards/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  flashcard.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
