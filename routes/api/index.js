const router = require("express").Router();
//const bookRoutes = require("./books");
const providerRoutes = require("./providers")

// Book routes
//router.use("/books", bookRoutes);
router.use("/providers", providerRoutes)

module.exports = router;
