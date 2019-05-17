const router = require("express").Router();
const characterRoutes = require("./character");

// Book routes
router.use("/character", characterRoutes);

module.exports = router;
