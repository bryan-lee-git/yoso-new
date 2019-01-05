const router = require("express").Router();
const ListItemController = require("../../controllers/ListItemController");

// Matches with "/api/listitem"
router
  .route("/")
  .get(ListItemController.findAll)
  .post(ListItemController.bulkCreate);

router.route("/findAll").post(ListItemController.findAll);

// Matches with "/api/listitem/:id"
router
  .route("/:id")
  .get(ListItemController.findById)
  .put(ListItemController.update)
  .delete(ListItemController.remove);

module.exports = router;
