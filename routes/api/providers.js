const router = require("express").Router();
const providerController = require("../../controllers/providerController");

// Matches with "/api/books"
router.route("/")
  .get(providerController.findAll)
  .post(providerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(providerController.findById)
  .put(providerController.update)
  .delete(providerController.remove);

module.exports = router;
