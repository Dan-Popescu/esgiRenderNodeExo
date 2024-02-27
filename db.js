const { Sequelize } = require("sequelize");

// database
const sequelize = new Sequelize(
  // process.env.POSTGRESS_DATABASE_NAME, // Database name
  // process.env.POSTGRESS_DATABASE_USERNAME, // User
  // process.env.POSTGRESS_DATABASE_PASSWORD, // Password
  process.env.DB_CONNECTION_STRING,
  {
    // host: process.env.POSTGRESS_DATABASE_HOST, // Host
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: "added",
      updatedAt: "updated",
    },
  }
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
