var express = require("express");
var router = express.Router();
const MongoHelper = require("../db/mongo_helper.js");

/* Get customer details */
router.get("/", function(req, res) {
  MongoHelper.get("customer").then(results => {
    res.status(200).json(results);
  });
});

/* Create a new customer */
router.post("/", function(req, res) {
  MongoHelper.create("customer", req.body).then(results => {
    res.status(201).json("New post created");
  });
});

/* Update a customers details */
router.put("/:id", function(req, res) {
  MongoHelper.update("customer", req.params.id, req.body).then(results => {
    res.status(200).json("Customer details updated");
  });
});

/* Delete a customer */
router.delete("/:id", function(req, res) {
  MongoHelper.delete("customer", req.params.id).then(results => {
    res.status(204).json("Customer deleted");
  });
});


/* Add new account */
router.post("/:id/accounts", function(req, res) {
  MongoHelper.addAccount("customer", req.params.id, req.body).then(
    results => {
      res.status(201).json("New account created");
    }
  );
});

module.exports = router;
