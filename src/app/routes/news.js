const dbConnection = require('../../config/dbConnection');


module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM kpi2.producto;', (err, rows, fields) => {
            console.log(rows);
          if(!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
        });  
      });

}