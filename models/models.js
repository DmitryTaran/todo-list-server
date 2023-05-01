const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const UserModel = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
})

const BoardModel = sequelize.define('board', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
})

const TodoModel = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
    completed: {type: DataTypes.BOOLEAN, defaultValue: false}
})

UserModel.hasMany(BoardModel)
BoardModel.belongsTo(UserModel)

BoardModel.hasMany(TodoModel)
TodoModel.belongsTo(BoardModel)

module.exports = {UserModel, BoardModel, TodoModel}