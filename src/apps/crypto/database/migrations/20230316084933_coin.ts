import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('coin', tableBuilder => {
    tableBuilder.string('id').notNullable().primary();
    tableBuilder.string('name').notNullable();
    tableBuilder.decimal('price').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('coin');
}
