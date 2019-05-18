const  express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
    
//setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//vistas
app.set('views', path.join(__dirname, '../app/views'));




app.use(bodyParser.urlencoded({extended: false}));

//exportar

module.exports = app;