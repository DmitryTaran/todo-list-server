const Router = require('express')
const router = new Router()
const BoardController = require('../controllers/BoardController')
router.get('/', BoardController.getAllBoards)
router.get('/:id', BoardController.getOneBoard)
router.post('/', BoardController.createBoard)
router.put('/', BoardController.updateBoard)
router.delete('/:id', BoardController.deleteBoard)
module.exports = router