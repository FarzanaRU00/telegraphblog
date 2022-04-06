const { Pool } = require("pg");

const pool = new Pool ({
    database: process.env.PGDATABASE,
    user: "postgres",
    password: "****************",
    database: "anonentriesdb",
    host: "localhost",
    port: 5432
});

module.exports = pool