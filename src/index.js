const express = require("express");
const app = express();

app.use(express.json());

//ROUTES
app.get("/produtos", (req, res) => {
	// const query = req.query;

	res.json();
});

app.post("/produtos", (req, res) => {
	const body = req.body;

	console.log(body);

	res.json(body);
});
app.listen(3000);
