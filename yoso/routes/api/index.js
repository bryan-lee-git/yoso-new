const router = require("express").Router();
const purchasesRoutes = require("./purchases");

// Purchase routes
router.use("/purchases", purchasesRoutes);

module.exports = router;
