console.log('Client side javascript file is loaded.');

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'projectUser',
  password: 'asd123',
  database: 'dragonfire'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * FROM class', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
  });

  connection.query('SELECT * FROM race', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
  });

  var results=[];

  function raceresults(name){
    connection.query('SELECT * FROM race where race = ?',[name], (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:\n');
        console.log(rows);
      });
  }

  function classresults(name){
    connection.query('SELECT * FROM class where class = ?',[name], (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:\n');
        console.log(rows);
      });
  }

  //raceresults('human');
  //classresults('fighter');

