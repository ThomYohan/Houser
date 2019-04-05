const express =  require('express')
require('dotenv').config()
// const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')

const controller = require('./controller')

const PORT = 4000

const { SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express()

app.use(bodyParser.json())

app.get('/houses/list', controller.list)
app.post('houses/list', controller.create)
app.delete('houses/list/:id', controller.delete)


app.listen( PORT, () => {
    console.log(`listening on port ${PORT}`)
})