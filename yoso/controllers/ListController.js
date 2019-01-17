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
    db.List.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.List.create({
      UserId: req.body.UserId,
      name: req.body.name
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createListWithItems: function(req, res) {
    console.log(`here's the items to save: `, req.body.items);
    db.List.create(
      {
        UserId: req.body.UserId,
        name: req.body.name,
        ListItems: req.body.items //must be an array of objects!!
      },
      { include: [db.ListItem] }
    )
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
  destroy: function(req, res) {
    console.log(
      `inside listcontroller, remove method, here's the req.params: and req.body: `,
      req.params,
      req.body
    );
    db.List.destroy({
      where: {
        UserId: req.body.userId,
        id: req.params.id
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
