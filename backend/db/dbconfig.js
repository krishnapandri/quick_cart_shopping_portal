require('dotenv').config();
const config = {
  server:process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
  driver: 'msnodesqlv8',
};

module.exports = config;

