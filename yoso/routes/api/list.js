const router = require("express").Router();
const ListController = require("../../controllers/ListController");

// Matches with "/api/list"
router
  .route("/")
  .get(ListController.findAll)
  .post(ListController.create);

router.route("/findAll").post(ListController.findAll);
router.route("/items").post(ListController.createListWithItems);

// Matches with "/api/list/:id"
router
  .route("/:id")
  .get(ListController.findById)
  .put(ListController.update)
  .delete(ListController.remove);

module.exports = router;
