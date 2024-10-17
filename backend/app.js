const express = require("express");
const cors = require("cors");
const triskelionDB = require("./triskelionDB");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

app.get("/", (req, res) => {
	res.send("<h1>HELLO FROM SABANG TRISKELION</h1>");
	console.log("hello from backend");
});

app.get("/about", (req, res) => {
	res.send("<h1>Still on process</h1>");
});

// Get all table names (chapters)
app.get("/chapters", async (req, res) => {
	try {
		const result = await triskelionDB.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
		res.json(result.rows); // Returns the list of tables (chapters)
	} catch (err) {
		console.error("Error executing query", err.stack);
		res.status(400).send("Database query error");
	}
});

// Get members from a specific chapter
app.get("/chapter/:name/members", async (req, res) => {
	const chapterName = req.params.name; // Get chapter name from the URL parameter

	try {
		// Check if the table exists in the database
		const tableExistsResult = await triskelionDB.query(
			`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = $1
      )
    `,
			[chapterName]
		);

		const tableExists = tableExistsResult.rows[0].exists;
		if (!tableExists) {
			return res.status(400).send("Invalid table name");
		}

		// Query the table if it exists
		const result = await triskelionDB.query(`SELECT * FROM ${chapterName}`);
		res.json(result.rows); // Returns the list of members in the chapter
	} catch (err) {
		console.error("Error executing query", err.stack);
		res.status(400).send("Database query error");
	}
});

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
