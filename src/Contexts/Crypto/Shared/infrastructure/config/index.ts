import convict from 'convict';

const cryptoConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['dev', 'test'],
    default: 'dev',
    env: 'NODE_ENV'
  },
  mysql: {
    host: {
      doc: 'MySql Host',
      format: String,
      env: 'MYSQL_URL_HOST',
      default: ''
    },
    user: {
      doc: 'MySql User',
      format: String,
      env: 'MYSQL_USER',
      default: ''
    },
    port: {
      doc: 'MySql Port',
      format: Number,
      env: 'MYSQL_PORT',
      default: 0
    },
    db: {
      doc: 'MySql Database Name',
      format: String,
      env: 'MYSQL_DB_NAME',
      default: ''
    },
    password: {
      doc: 'MySql password',
      format: String,
      env: 'MYSQL_PASSWORD_NAME',
      default: ''
    }
  },
  app: {
    port: {
      doc: 'Port app',
      format: String,
      env: 'PORT',
      default: ''
    }
  }
});

cryptoConfig.loadFile([`${__dirname}/dev.json`, `${__dirname}/${cryptoConfig.get('env')}.json`]);

export default cryptoConfig;
