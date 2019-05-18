const dbConnection = require('../../config/dbConnection');


module.exports = app => {
    const connection = dbConnection();

    

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM kpi.producto;', (err, rows, fields) => {
            console.log(rows);
          if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
        });  
      });

      app.get('/Vendedor', (req, res) => {
        connection.query('SELECT * FROM kpi.vendedor;', (err, rows, fields) => {
            console.log(rows);
          if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
        });  
      });

      app.get('/Cliente', (req, res) => {
        connection.query('SELECT * FROM kpi.cliente;', (err, rows, fields) => {
            console.log(rows);
          if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
        });  
      });
      

}