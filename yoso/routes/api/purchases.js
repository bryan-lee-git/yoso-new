const router = require("express").Router();
const PurchasesController = require("../../controllers/PurchasesController");

// Matches with "/api/Purchases"
router.route("/")
  .get(PurchasesController.findAll)
  .post(PurchasesController.create);

// Matches with "/api/Purchases/:id"
router
  .route("/:id")
  .get(PurchasesController.findById)
  .put(PurchasesController.update)
  .delete(PurchasesController.remove);

module.exports = router;
