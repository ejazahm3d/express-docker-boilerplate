const { Pool, Client } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI
});

module.exports = pool;
