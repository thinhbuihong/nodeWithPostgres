const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	password: "postgres",
	port: 5432,
	database: "tododb",
})

module.exports = pool;