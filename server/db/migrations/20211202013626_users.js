exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('phone').notNullable()
    table.integer('birth_date').notNullable()
    table.integer('gender_id').notNullable().references('id').inTable('gender')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}