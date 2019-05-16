const  express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();


//setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//vistas
app.set('views', path.join(__dirname, '../app/views'));


app.use(bodyParser.urlencoded({extended: false}));

//exportar

module.exports = app;