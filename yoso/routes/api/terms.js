const router = require("express").Router();
const TermsController = require("../../controllers/TermsController");

// Matches with "/api/terms"
router.route("/").post(TermsController.findAll);
