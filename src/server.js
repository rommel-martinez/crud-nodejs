const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('dotenv').config()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
const userRoute = require('./routes/Users')
const loginRoute = require('./routes/Logins')

app.use('/users', userRoute)
app.use('/logins', loginRoute)

const port = 3001

app.listen(port, () => {
    console.log("Listening on port:", port)
})