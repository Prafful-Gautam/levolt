const config = require("./config").knexConnection;
module.exports = {
  development: {
    client: "mysql",
    connection: config,
    migration: {
      directory: __dirname + "/migrations",
    },
  },
};
