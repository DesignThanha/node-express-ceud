var express = require('express')
var cors = require('cors')

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb'
});


var app = express()
app.use(cors())
app.use(express.json())

app.get('/users', function (req, res, next) {
     connection.query(
     'SELECT * FROM `users` ',
          function (err, results, fields) {
               res.json(results);
          }
     );
})
     


app.get('/users/:id', function (req, res, next) {
     const id = req.params.id;

     connection.query(
          'SELECT * FROM `users` WHERE `id` = ? ',
          [id],
          function (err, results) {
               res.json(results);
          }
     );
})


app.post('/users', function (req, res, next) {
res.json(req.body.fname)
})
     
     

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})