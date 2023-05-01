const {TodoModel} = require("../models/models");
const ApiError = require("../error/ApiError");

class TodoController {
    async getTodos(req, res, next) {
        try {
            const {boardId} = req.query

            const todos = await TodoModel.findAll({where: {boardId}})

            return res.json(todos)

        } catch (e) {
            return   next(ApiError.badRequest(e.message))
        }
    }

    async createTodo(req, res, next) {
        try {

            const {text, description, boardId} = req.body

            const todo = await TodoModel.create({text, description, boardId})

            return res.json(todo)

        } catch (e) {
            return   next(ApiError.badRequest(e.message))
        }
    }

    async updateTodo(req, res, next) {
        try {

            const {id, ...updated} = req.body
            const result = await TodoModel.update({...updated}, {where: {id}})
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
            return    next(ApiError.badRequest(e.message))

        }
    }
}

module.exports = new TodoController()