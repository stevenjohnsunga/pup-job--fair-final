const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // your password
    database : 'test' // your database
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root', // your password
//   database : 'db_name' // your database
// });

// connection.connect((err) => {
//     if(err) throw err;
//     console.log('Connected to MySQL Server!');
// });

// const pool = mysql.createPool({
//     connectionLimit : 100, //important
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'db_name',
//     debug    :  false
// });

// pool.getConnection((err, connection) => {
//     if(err) throw err
//     console.log('connected as id ' + connection.threadId)
// });