
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments('user_id')
    users.string('username', 126).notNullable();
    users.string('password', 126).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
