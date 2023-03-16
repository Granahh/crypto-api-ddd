import knex, { Knex } from 'knex';
import MySqlConfig from './MySqlConfig';
import { Nullable } from '../../domain/Nullable';

export class MySqlClientFactory {
  public static clients: { [key: string]: Knex<any, unknown[]> } = {};

  static async createPool(context: string, config: MySqlConfig): Promise<Knex<any, unknown[]>> {
    let pool = MySqlClientFactory.getPool(context);

    if (!pool) {
      pool = await MySqlClientFactory.createAndConnectPool(config);
      MySqlClientFactory.registerPool(pool, context);
    }

    return pool;
  }

  public static getPool(context: string): Nullable<Knex<any, unknown[]>> {
    return MySqlClientFactory.clients[context];
  }

  private static registerPool(pool: Knex<any, unknown[]>, contextName: string): void {
    MySqlClientFactory.clients[contextName] = pool;
  }

  private static async createAndConnectPool(config: MySqlConfig): Promise<Knex<any, unknown[]>> {
    return knex({
      client: 'mysql2',
      connection: {
        database: config.database,
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password
      },
      pool: { min: 0, max: 7 }
    });
  }
}
