const Router = require('express')
const router = new Router()
const TodoController = require('../controllers/TodoController')

router.get('/', TodoController.getTodos)
router.post('/', TodoController.createTodo)
router.put('/', TodoController.updateTodo)
router.delete('/', TodoController.deleteTodo)

module.exports = router