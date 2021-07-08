const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const JSAlert = require("js-alert");
//const cookieParser = require('cookie-parser')
//const session = require('express-session')
//const flash = require('connect-flash')
const Router = require('router')
//const ejsLint = require('ejs-lint')




var router = express.Router()

const viatura = require('./routes/viatura')
const lista_viatura = require('./routes/lista_viatura')

//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//Ficheiros estáticos
app.use(express.static('assets'));
app.use('/assets', express.static( 'assets'))
app.use('/js', express.static(__dirname + 'assets/js'))
app.use('/sass', express.static(__dirname + 'assets/sass'))
app.use('/webfonts', express.static(__dirname + 'assets/webfonts'))

app.use('/viatura', viatura)
app.use('', viatura)
app.use('/lista_viatura', lista_viatura)
app.use('', lista_viatura)


//Set View's
app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(8000, function(){
    console.log("Isto funciona");
});