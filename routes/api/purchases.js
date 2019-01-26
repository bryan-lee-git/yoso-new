const router = require("express").Router();
const PurchasesController = require("../../controllers/PurchasesController");

// Matches with "/api/purchases"
router
  .route("/")
  .get(PurchasesController.findAll)
  .post(PurchasesController.create);

// Matches with "/api/purchases/all"

router.route("/all").post(PurchasesController.findAll);

// Matches with "/api/purchases/:id"
router
  .route("/:id")
  .get(PurchasesController.findById)
  .put(PurchasesController.update)
  .delete(PurchasesController.remove);

module.exports = router;
