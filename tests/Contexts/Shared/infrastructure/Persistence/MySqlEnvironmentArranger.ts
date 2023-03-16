import { Knex } from 'knex';
import { EnvironmentArranger } from '../Arranger/EnvironmentArranger';

type MySqlRawItemType = {
  fullTableName: string;
};

export class MySqlEnvironmentArranger implements EnvironmentArranger {
  private pool: Knex<any, unknown[]> | undefined;
  constructor(private _pool: Promise<Knex<any, unknown[]>>) {}

  async run(): Promise<void> {
    this.pool = await this._pool;

    const tableNames = await this.retrieveDatabaseTables();
    await Promise.all(tableNames.map(tableName => this.truncateDatabaseTables(tableName.fullTableName)));
  }

  async stop(): Promise<void> {
    await this.pool!!.destroy();
  }

  private async truncateDatabaseTables(tableName: string): Promise<void> {
    await this.pool!!.raw(`TRUNCATE ${tableName};`);
  }

  private async retrieveDatabaseTables(): Promise<MySqlRawItemType[]> {
    return (
      await this.pool!!.raw(
        `SELECT CONCAT(table_schema, '.', table_name) AS fullTableName
                FROM information_schema.tables
                WHERE table_schema LIKE DATABASE()
                AND table_name NOT IN ('knex_migrations', 'knex_migrations_lock')`
      )
    )[0];
  }
}
