const db = require("../models");

// Defining methods for the PurchasessController
module.exports = {
  findAll: function(req, res) {
    db.Purchases.findAll({
      where: { pantryId: req.body.id },
      order: [["createdAt", "DESC"]]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Purchases.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Purchases.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.json(err);
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.Purchases.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Purchases.findById({
      _id: req.params.id
    })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
