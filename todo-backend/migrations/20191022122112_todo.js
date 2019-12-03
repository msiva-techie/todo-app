exports.up = function (knex) {
	return knex.schema
		.createTable('todos', function (table) {
			table.increments('id');
			table.string('title', 255).notNullable();
			table.text('description');
			table.integer('priority');
			table.datetime('created_at');
		})
};

exports.down = function (knex) {
	return knex.schema
		.dropTable("todos");
};