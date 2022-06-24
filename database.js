var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '172.17.0.3', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'root',      // Replace with your database password
  database: 'nodeapp' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;