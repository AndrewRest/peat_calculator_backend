import express from 'express'
import bodyParser from "body-parser";
import {boxesRouter} from "./routes/boxes-router";

const app = express()
const port = process.env.PORT || 3009

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/', boxesRouter)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})