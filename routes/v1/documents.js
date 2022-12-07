const express = require("express");
const router = express.Router();
const documentsController = require("../../controllers/documents");

router
  .get("/", documentsController.list)
  .post("/", documentsController.create);

router.get("/search", documentsController.search);

router
  .get("/:id", documentsController.show)
  .put("/:id", documentsController.update)
  .delete("/:id", documentsController.remove);

module.exports = router;
