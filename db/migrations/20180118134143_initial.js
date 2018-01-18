exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('hedgehogs', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('hoglets');
      table.string('allergies');

      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('hedgehogs'),
  ]);
};
