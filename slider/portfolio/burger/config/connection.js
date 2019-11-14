const mysql = require('mysql');

var connection;

console.log(process.env.JAWSDB_YELLOW_URL);

if (process.env.JAWSDB_YELLOW_URL) {
  //Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_YELLOW_URL);
  console.log('Using remote database');
} else {
  //Database is local
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'marcelperu2019',
    database: 'burgers_db'
  });
  console.log('Using local database');
}
//Make the connection to MYSQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  } else {
    console.log(
      'Connected to MySQL database as id ' + connection.threadId + '\n\n'
    );
  }
});
//Export connection for ORM use
module.exports = connection;

// connection.connect(function(error) {
//   if (!error) {
//     console.error('error connecting:' + error.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;
