const express = require('express')
const cors = require('cors')

const usersRouter = require('./routes/userRoutes')
const loginRouter = require('./routes/loginRoutes')
const app = express()

const port= 5000

app.use(cors())
app.use(express.json())

app.use('/home', usersRouter)
app.use('/login', loginRouter)

app.listen(port, () => console.log("Servidor levantado en el puerto", port));