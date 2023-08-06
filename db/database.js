// db/database.js
const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'dpg-cj6st85jeehc73902nh0-a',
  user: 'nodedeploy_o5ro_user',
  password: 'NSIWtm9DrkBzoB13PHm7zWtBvJLgifQ9',
  database: 'nodedeploy_o5ro'
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
