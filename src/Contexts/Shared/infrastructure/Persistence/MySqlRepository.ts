import { Knex } from 'knex';

export type Result<T> = {
  raw: any;
  rows: T[];
};
export abstract class MySqlRepository {
  protected constructor(private _pool: Promise<Knex<any, unknown[]>>) {}

  protected async pool(): Promise<Knex<any, unknown[]>> {
    return await this._pool;
  }

  protected async executeQuery<T>(query: string, bindings?: any): Promise<Result<T>> {
    const pool = await this.pool();
    const result = await pool.raw(query, bindings);
    return {
      raw: result,
      rows: result[0]
    } as Result<T>;
  }

  protected async execute(query: string, bindings: any): Promise<void> {
    const pool = await this.pool();

    await pool.raw(query, bindings);
  }
}
