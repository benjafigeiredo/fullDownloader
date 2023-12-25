const { DataTypes } = require('sequelize');

const UserModel =  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

module.exports = {
    initialize: (sequelize) => {
        this.model = sequelize.define("user", UserModel);
    },
    createUser: (user) => {
        return this.model.create(user);
    },
    findAllUsers: () => {
        return this.model.findAll();
    }
};