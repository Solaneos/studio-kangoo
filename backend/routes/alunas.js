const express = require('express');
const router = express.Router();

let alunas = [];

router.get('/', (req, res) => {
  res.json(alunas);
});

router.post('/', (req, res) => {
  const novaAluna = req.body;
  alunas.push(novaAluna);
  res.status(201).json(novaAluna);
});

module.exports = router;
