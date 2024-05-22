const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/userController");

// User routes
// router.get("/favorite_books", ctrl.getUserFavoriteBooks);
// router.post("/favorite_books", ctrl.addFavoriteBookToUser);
// router.delete("/favorite_books/:bookId", ctrl.removeFavoriteBookFromUser);
// router.get("/loans", ctrl.getUserLoans);

// Protected routes
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete);
// router.get("/:id/loans", ctrl.getLoansByUserId);

module.exports = router;