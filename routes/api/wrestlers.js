const router = require("express").Router();
const wrestlersController = require("../../controllers/wrestlersController");

// Matches with "/api/wrestlers"
router
  .route("/")
  .get(wrestlersController.findAll)
  .post(wrestlersController.create);

// Matches with "/api/wrestlers/:id"
router
  .route("/:id")
  .get(wrestlersController.findById)
  .put(wrestlersController.update)
  .delete(wrestlersController.remove);

module.exports = router;
