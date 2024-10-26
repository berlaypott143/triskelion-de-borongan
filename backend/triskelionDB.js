require("dotenv").config();
const { Pool } = require("pg");

// Configure the PostgreSQL connection details using environment variables
const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	//ssl: { rejectUnauthorized: false },
});

// Connecting to DATABASE with query
pool.connect((err, client, release) => {
	if (err) {
		return console.error("Error acquiring client", err.stack);
	}
	client.query("SELECT NOW()", (err, result) => {
		release();
		if (err) {
			return console.error("Error executing query", err.stack);
		}
		console.log("Successful connection", result.rows);
	});
});

module.exports = pool;
