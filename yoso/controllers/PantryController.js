const db = require("../models");

// Defining methods for the PantryController
module.exports = {
  findAll: function(req, res) {
    db.Pantry.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Pantry.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOrCreate: function(req, res) {
    db.Pantry.findOrCreate(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Pantry.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Pantry.findById({
      _id: req.params.id
    })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
