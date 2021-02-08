const config = require("../config/config");
const Sequelize = require("sequelize");

module.exports = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host    : config.development.host,
        port    : config.development.port,
        dialect : config.development.dialect
    }
);
