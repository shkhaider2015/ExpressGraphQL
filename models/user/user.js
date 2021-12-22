const { DataTypes, Model } = require('sequelize'); 
const {sequalize} = require("../../config/database");

class User extends Model {};

User.init({
    fullName : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    }
}, {
    sequelize: sequalize,
    modelName: 'User'
})

module.exports = User;