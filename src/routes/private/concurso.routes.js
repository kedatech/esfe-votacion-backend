const router = require("express").Router()
const {
  readItems,
  createItem,
  updateItem,
  deleteItem } = require("../../controllers/concurso.controllers")

router.get("/", readItems)
router.post("/", createItem)
router.put("/", updateItem)
router.delete("/:Id", deleteItem)

module.exports = router