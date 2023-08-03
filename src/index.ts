import express from 'express'
import bodyParser from "body-parser"
import {boxesRouter} from "./routes/boxes-router"
import {authRouter} from "./routes/auth-router";

const cors = require("cors")

const app = express()
app.use(cors())
const port = process.env.PORT || 3009

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/', boxesRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})