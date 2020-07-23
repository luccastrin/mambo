exports.up = function (knex) {
	return knex.schema.createTable("products", function (table) {
		table.increments("id").primary();
		table.string("feature").notNullable();
		table.string("name").notNullable();
		table.string("type").notNullable();
		table.decimal("value").notNullable();
		table.string("image").notNullable();
		table.string("description").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("products");
};
