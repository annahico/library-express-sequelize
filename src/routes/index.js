const express = require("express");
const router = express.Router();
const authorRoutes = require("./author.routes");
const bookRoutes = require("./book.routes");

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);

module.exports = router;