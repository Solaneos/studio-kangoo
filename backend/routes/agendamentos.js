const express = require('express');
const router = express.Router();

let agendamentos = [];

router.get('/', (req, res) => {
  res.json(agendamentos);
});

router.post('/', (req, res) => {
  const novoAgendamento = req.body;
  agendamentos.push(novoAgendamento);
  res.status(201).json(novoAgendamento);
});

module.exports = router;
