import config from '../../../Contexts/Crypto/Shared/infrastructure/config';
import { Knex } from 'knex';

const knexConfig: { [key: string]: Knex.Config } = {
  dev: {
    client: 'mysql2',
    connection: {
      database: config.get('mysql.db'),
      user: config.get('mysql.user'),
      password: config.get('mysql.password'),
      port: Number(config.get('mysql.port')),
      host: config.get('mysql.host'),
      multipleStatements: true
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: 'mysql2',
    connection: {
      database: config.get('mysql.db'),
      user: config.get('mysql.user'),
      password: config.get('mysql.password'),
      port: Number(config.get('mysql.port')),
      host: config.get('mysql.host'),
      multipleStatements: true
    },
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

module.exports = knexConfig;
