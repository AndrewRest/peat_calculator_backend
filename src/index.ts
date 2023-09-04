const bodyParser = require("body-parser")
const express = require("express");
const cors = require("cors")
const {boxesRouter} = require("./routes/boxes-router");
const {authRouter} = require("./routes/auth-router");
// import {boxesRouter} from "./routes/boxes-router";
// import {authRouter} from "./routes/auth-router";


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