require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT
const cors = require('cors')
const app = express()
const router = require('./routes')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const models = require('./models/models')
const path = require('path')

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))
    }
    catch (e){

    }
}

start()