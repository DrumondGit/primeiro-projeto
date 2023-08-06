const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // 'public' é o nome da pasta onde seus arquivos estáticos estão

app.use(express.json());

app.use(cors());
app.use(express.json());

// Configuração do Pool do PostgreSQL com a URL de conexão diretamente
const pool = new Pool({
  connectionString: 'postgres://database_wct0_user:nq2StX0ZxFIOxHqN152cMAGz1VDXmief@dpg-cj7i3j45kgrc73do3o50-a.ohio-postgres.render.com/database_wct0',
  ssl: {
    rejectUnauthorized: false
  }
});

// Rota para criar um novo item no banco de dados
app.post('/items', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO items (name) VALUES ($1) RETURNING id', [name]);
    res.json({ message: 'Item criado com sucesso', id: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para listar todos os itens
app.get('/items', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM items');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
