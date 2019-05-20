const router = require("express").Router();
const characterRoutes = require("./character");

// character routes
router.use("/character", characterRoutes);

module.exports = router;
