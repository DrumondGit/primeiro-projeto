// db/database.js
const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'dpg-cj7i3j45kgrc73do3o50-a.ohio-postgres.render.com',
  user: 'database_wct0_user',
  password: 'nq2StX0ZxFIOxHqN152cMAGz1VDXmief',
  database: 'ddatabase_wct0'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

module.exports = db;
