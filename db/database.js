const { Pool } = require('pg');

// Configuração do Pool do PostgreSQL com a URL de conexão diretamente
const pool = new Pool({
  connectionString: 'postgres://database_wct0_user:nq2StX0ZxFIOxHqN152cMAGz1VDXmief@dpg-cj7i3j45kgrc73do3o50-a.ohio-postgres.render.com/database_wct0',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
