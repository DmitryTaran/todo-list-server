const ApiError = require("../error/ApiError");
const {BoardModel} = require('../models/models')
const {where} = require("sequelize");

class BoardController {

    async getAllBoards(req, res, next) {
        try {

            const {userId} = req.query

            const boards = await BoardModel.findAll({where: {userId}})

            return res.json(boards)

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getOneBoard(req, res, next) {
        try {
            const {id} = req.body

            const board = await BoardModel.findOne(id)

            return res.json(board)

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async createBoard(req, res, next) {
        try {

            const {title, userId} = req.body

            const board = await BoardModel.create({title, userId})

            return res.json(board)

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async updateBoard(req, res, next) {
        try {
            const {id, title} = req.body

            const board = BoardModel.update({title}, {where: {id}})

            return res.json(board)

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async deleteBoard(req, res, next) {
        try {

            const {id} = req.params

            const board = BoardModel.destroy({where: {id}})

            return res.json(board)

        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

}


module.exports = new BoardController()