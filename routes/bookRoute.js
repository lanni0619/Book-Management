const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getOneBook);
router.post("/", bookController.createBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;

