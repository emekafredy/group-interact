require('dotenv').config();

const dbDetails = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  env: {
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  }
};

const database = {
  development: dbDetails,
  test: dbDetails,
  production: dbDetails,
};

module.exports = database;
