const express = require('express');
const cors = require('cors');

const alunasRoutes = require('./routes/alunas');
const agendamentosRoutes = require('./routes/agendamentos');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/alunas', alunasRoutes);
app.use('/api/agendamentos', agendamentosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API do Studio Kangoo está rodando! 🚀');
  });
  