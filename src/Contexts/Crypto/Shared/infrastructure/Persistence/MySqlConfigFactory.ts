import config from '../config';
import MySqlConfig from '../../../../Shared/infrastructure/Persistence/MySqlConfig';

export default class MySqlConfigFactory {
  static createConfig(): MySqlConfig {
    return {
      user: config.get('mysql.user'),
      password: config.get('mysql.password'),
      port: Number(config.get('mysql.port')),
      host: config.get('mysql.host'),
      database: config.get('mysql.db')
    };
  }
}
