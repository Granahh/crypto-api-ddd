import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('coin_counter', tableBuilder => {
    tableBuilder.uuid('id').notNullable().primary();
    tableBuilder.integer('value').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('coin_counter');
}
