const db = require("../models");

// Defining methods for the PantryController
module.exports = {
  findAll: function(req, res) {
    console.log(`\ninside findall of pantry, here's the req.body: `, req.body);
    db.Pantry.findAll({
      where: {
        UserId: req.body.UserId
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Pantry.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log(`\n\n Inside pantry findone, here's req.body: `, req.body);
    db.Pantry.findOne({
      where: {
        UserId: req.body.UserId,
        name: req.body.name
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOrCreate: function(req, res) {
    const { name, shelfLife, frequency, stock, UserId, description } = req.body;
    console.log(
      `\n\ninside find or create of pantry, here's the req.body.UserId: `,
      UserId
    );
    db.Pantry.findOrCreate({
      where: {
        UserId: UserId,
        name: name
      },
      defaults: {
        name: name,
        shelfLife: shelfLife,
        frequency: frequency,
        stock: stock,
        description: description
      }
    })
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
