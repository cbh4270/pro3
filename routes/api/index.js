const router = require("express").Router();
const wrestlersRoutes = require("./wrestlers");

// Book routes
router.use("/wrestlers", wrestlersRoutes);

module.exports = router;
