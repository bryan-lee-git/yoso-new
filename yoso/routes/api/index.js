const router = require("express").Router();
const purchasesRoutes = require("./purchases");

// Book routes
router.use("/purchases", purchasesRoutes);

module.exports = router;
