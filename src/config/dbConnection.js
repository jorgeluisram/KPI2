const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'foot',
    password: 'jorge1994',
    database: 'kpi'
  });
}


