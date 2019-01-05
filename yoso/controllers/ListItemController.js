const db = require("../models");

// Defining methods for the ListItemController
module.exports = {
  findAll: function(req, res) {
    console.log(
      `inside the list findall method of the listitem controller, here is the req.body: `,
      req.body
    );
    db.ListItem.findAll({
      where: { ListId: req.body.listId }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.ListItems.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(
      `here's req.body inside the createmethod of listitem: `,
      req.body
    );
    db.ListItems.create({
      ListId: req.body.ListId,
      name: req.body.data
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.ListItems.findOneAndUpdate(
      {
        where: {}
      },
      req.body
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log(
      `here in the remove method of the listitems, here is the req.body: ${
        req.body.listId
      } and here is the req.params: ${req.params.id}`
    );
    db.ListItem.findOne({
      where: {
        ListId: req.body.listId,
        id: req.params.id
      }
    })
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
