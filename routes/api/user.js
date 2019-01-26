const router = require("express").Router();
const UserController = require("../../controllers/PantryController");

// Matches with "/api/user"
router.route("/").post(UserController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(UserController.findOne)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;
