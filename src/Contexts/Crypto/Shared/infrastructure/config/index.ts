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
      env: 'MYSQL_URL_HOST'
    },
    user: {
      doc: 'MySql User',
      format: String,
      env: 'MYSQL_USER'
    },
    port: {
      doc: 'MySql Port',
      format: Number,
      env: 'MYSQL_PORT'
    },
    db: {
      doc: 'MySql Database Name',
      format: String,
      env: 'MYSQL_DB_NAME'
    },
    password: {
      doc: 'MySql password',
      format: String,
      env: 'MYSQL_PASSWORD_NAME'
    }
  },
  app: {
    port: {
      doc: 'Port app',
      format: Number,
      env: 'PORT'
    }
  }
});

export default cryptoConfig;
