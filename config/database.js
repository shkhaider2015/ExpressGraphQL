const { Sequelize } = require("sequelize");
let mysql = require("mysql");

const sequalize = new Sequelize('graphdb_node', 'root', '72410', {
    host: 'localhost',
    dialect: 'mysql'
})
sequalize.sync();
const connect = async () =>
{
    try {
        await sequalize.authenticate();
        console.log("Connection establish successfully");
    } catch (error) {
        console.log("Unable to connect to the database : ", error);
    }
}

module.exports = {
    connect,
    sequalize
}