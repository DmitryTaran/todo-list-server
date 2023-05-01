const Router = require('express')
const router = new Router()
const boardRouter = require('./boardRouter')
const userRouter = require('./userRouter')
const todoRouter = require('./todoRouter')

router.use('/board', boardRouter)
router.use('/user', userRouter)
router.use('/todo', todoRouter)

module.exports = router