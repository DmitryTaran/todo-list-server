const {TodoModel} = require("../models/models");
const ApiError = require("../error/ApiError");

class TodoController {
    async getTodos(req, res, next) {
        try {
            const {boardId} = req.query
            const todos = await TodoModel.findAll({where: {boardId}})
            return res.json(todos)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async createTodo(req, res, next) {
        try {
            const {text, description, boardId, deadline} = req.body
            const date = deadline === '' ? null : deadline
            const todo = await TodoModel.create({text, description, boardId, deadline: date})
            return res.json(todo)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateTodo(req, res, next) {
        try {

            const {id, deadline, ...updated} = req.body
            const date = deadline === '' ? null : deadline
            await TodoModel.update({...updated, deadline: date}, {where: {id}})
            const todo = await TodoModel.findByPk(id)
            return res.json(todo)

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteTodo(req, res, next) {
        try {

            const {id} = req.query
            const todo = await TodoModel.destroy({where: {id}})
            return res.json(todo)

        } catch (e) {
            return next(ApiError.badRequest(e.message))

        }
    }
}

module.exports = new TodoController()