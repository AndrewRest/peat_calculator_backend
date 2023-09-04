import bodyParser from "body-parser"
import {boxesRouter} from "./routes/boxes-router";
import {authRouter} from "./routes/auth-router";

const express = require("express");
const cors = require("cors")

const app = express()
app.use(cors())
const port = process.env.PORT || 3009

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


app.use('/boxes', boxesRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})