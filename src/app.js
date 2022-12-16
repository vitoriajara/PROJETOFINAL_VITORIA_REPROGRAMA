require("dotenv-safe").config()
const express = require("express")
const cors = require("cors")
const database = require("./config/database")
const profissionalRoutes = require("./routes/profissionalRoutes")
const pacienteRoutes = require("./routes/pacienteRoutes")
const consultaRoutes = require("./routes/consultaRoutes")

const app = express()

app.use(express.json())
app.use(cors())
database.connect()

app.use(pacienteRoutes)
app.use(profissionalRoutes)
app.use(consultaRoutes)

module.exports = app
