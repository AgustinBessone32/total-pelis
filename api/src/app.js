const express = require('express');
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()

const url =`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qf6tz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;



// conexion con bd
mongoose.connect(url, {
    useNewUrlParser: true , useUnifiedTopology: true})
        .then(() => console.log("DB CONECTADA"))
        

// configuracion
app.set('port', process.env.PORT || 4000)

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(cors())

//importando rutas
const initRoutes = require('./routes/index')

//rutas
app.use('/', initRoutes)

app.listen(app.get('port') , () => {
    console.log('Andando en el 4000')
})