const express = require("express");
const cors = require("cors");
const triskelionDB = require("./triskelionDB");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parsing JSON data in request

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
		console.log("Attempting to query database");
		const result = await triskelionDB.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
		console.log("Query result:", result);
		res.json(result.rows); // Returns the list of tables (chapters)
	} catch (err) {
		console.error("Detailed error: ", err.stack);
		res.status(400).json({ error: "Database query error", details: err.stack });
	}
});

// Get members from a specific chapter
app.get("/chapter/:name/members", async (req, res) => {
	const chapterName = req.params.name; // Get chapter name from the URL parameter
	console.log(chapterName);

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
			return res.status(400).json("Invalid table name");
		}

		// Query the table if it exists
		const result = await triskelionDB.query(`SELECT * FROM ${chapterName}`);
		console.log(result);
		res.json(result.rows); // Returns the list of members in the chapter
	} catch (err) {
		console.error("Error executing query", err.stack);
		res.status(400).json("Database query error");
	}
});

// PUT endpoint to insert form data into the correct chapter table
app.put("/chapter/:name/add-member", async (req, res) => {
	const chapterName = req.params.name; // Get chapter name from the URL parameter
	const { name, alexisName, dateOfSurvival, gt, mi, batchName } = req.body; // Extracting form data

	console.log(req.params.name);
	console.log("Received data:", req.body);

	try {
		// Checking if table exists in database
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
			return res.status(400).json({ message: "Invalid chapter name" });
		}

		// Insert form data in the corresponding table
		const insertQuery = `
			INSERT INTO ${chapterName} (name, alexis_name, date_of_survival, gt, mi, batch_name, chapter)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING *;
		`;

		const result = await triskelionDB.query(insertQuery, [
			name,
			alexisName,
			dateOfSurvival,
			gt,
			mi,
			batchName,
			chapterName,
		]);

		res.status(201).json({
			message: "Member added successfully",
			member: result.rows[0], // Return the inserted member details
		});
	} catch (err) {
		console.error("Error in inserting data", err.stack);
		res.status(500).json({ message: "Server error", error: err.stack });
	}
});

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
