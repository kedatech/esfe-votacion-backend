const db = require("../models/concurso.models")

const readItems = async (req, res) => {
  const resul = await db.readItems()
  if (resul === 0) {
    res.status(500).json({ error: "Database error" })
  } else {
    res.status(201).json(resul)
  }
}
const readCategoriaById = async (req, res) => {
  const Id = req.params.Id
  if( Id === undefined) {
    res.status(500).json({ error: "Database error" })
    return;
  } 
  const resul = await db.readCategoriaById(Id)
  if (resul === 0) {
    res.status(500).json({ error: "Database error" })
  } else {
    res.status(201).json(resul)
  }
}

const createItem = async (req, res) => {
  const resul = await db.createItem(req.body)
  if (resul === 0) {
    res.status(500).json({ error: "Database error" })
  } else if (resul === -1) {
    res.status(409).json({ error: "Ya existe" })
  }
  else {
    res.json(resul)
  }
}

const updateItem = async (req, res) => {
  const resul = await db.updateItem(req.body)
  if (resul === 0) {
    res.status(500).json({ error: "Database error" })
  } else if (resul === -2) {
    res.status(404).json({ error: "No existe" })
  }
  else {
    res.json(resul)
  }
}

const deleteItem = async (req, res) => {
  const resul = await db.deleteItem(req.params.Id)
  if (resul === 0) {
    res.status(500).json({ error: "Database error" })
  } else if (resul === -2) {
    res.status(404).json({ error: "No existe" })
  }
  else {
    res.status(202).json({success:`concurso ${req.params.Id} eliminado`});
  }
}

module.exports = {
  readItems,
  readCategoriaById,
  createItem,
  updateItem,
  deleteItem
}