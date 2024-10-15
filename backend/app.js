const express = require("express");
const cors = require("cors");
const triskelionDB = require("./triskelionDB");
const app = express();
const PORT = 3000;


// MIddleware
app.use(cors());

app.get("/", (req, res) => {
	res.send("<h1>HELLO FROM SABANG TRISKELION</h1>");
	console.log("hello from backend");
});

app.get("/data", async (req, res) => {
	try {
		const result = await triskelionDB.query(
			"SELECT * FROM sabang_community_chapter"
		);
		res.json(result.rows);
	} catch (err) {
		console.error("Error executing query", err.stack);
		res.status(400).send("Database query error");
	}
});

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
