// db/database.js
const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'dpg-cj7h5mcl975s73frmm0g-a',
  user: 'dbuser',
  password: 'xluz883SGqo5D3dN2rUMt7em7o5QTcgH',
  database: 'dbname_yoyn'
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
