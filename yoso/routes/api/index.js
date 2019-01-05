const router = require("express").Router();
const purchasesRoutes = require("./purchases");
const listRoutes = require("./list");
const listItemRoutes = require("./listitem");
const pantryRoutes = require("./pantry");

// Purchase routes
router.use("/purchases", purchasesRoutes);
router.use("/list", listRoutes);
router.use("/listitem", listItemRoutes);
router.use("/pantry", pantryRoutes);

module.exports = router;
