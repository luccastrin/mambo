const express = require("express");
const routes = express.Router();
const connection = require("./database/connection");

routes.get("/produtos", async (req, res) => {
	const product = await connection("products").select("*");

	return res.json(product);
});

routes.post("/produtos", async (req, res) => {
	const {feature, name, type, value, image, description} = req.body;

	await connection("products").insert({
		feature,
		name,
		type,
		value,
		image,
		description,
	});

	return res.json({feature, name, type, value, image, description});
});

module.exports = routes;
