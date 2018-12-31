const router = require("express").Router();
const UsersController = require("../controllers/UsersController");

// Matches with "/login"
router.route("/")
    .get(UsersController.findOne)
    .post(UsersController.create);

// Matches with "/login/:id"
router
    .route("/:id")
    .put(UsersController.update)
    .delete(UsersController.remove);

module.exports = router;