const db = require("../models");

// Defining methods for the ListController
module.exports = {
  findAll: function(req, res) {
    console.log(
      `inside the list findall method of the list controller, here is the req.body: `,
      req.body
    );
    db.List.findAll({
      where: { UserId: req.body.userId }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.List.findById({
      where: {
        userId: req.body.userId,
        id: req.params.listId
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.List.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.List.findOneAndUpdate(
      {
        where: {
          userId: req.body.userId,
          listId: req.params.listId
        }
      },
      req.body.data
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List.findOne({
      where: {
        userId: req.body.userId,
        id: req.params.listId
      }
    })
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
