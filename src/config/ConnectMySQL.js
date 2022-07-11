import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0335647164Abc',
  database: 'courses_management_dev',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection(function (err, conn) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connect to mysql successfully !');
  }
});

export default pool;
