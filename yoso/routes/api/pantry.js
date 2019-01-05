const router = require("express").Router();
const PantryController = require("../../controllers/PantryController");

// Matches with "/api/pantry"
router
  .route("/")
  .get(PantryController.findAll)
  .post(PantryController.create);

// Matches with "/api/pantry/:id"
router
  .route("/:id")
  .get(PantryController.findById)
  .put(PantryController.update)
  .delete(PantryController.remove);

module.exports = router;
