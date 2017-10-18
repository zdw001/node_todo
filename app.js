var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static(__dirname + '/public'));
console.log(__dirname)

// fire controllers
todoController(app);

// listen to port 
app.listen(8000);
console.log('Listening to port 3000');

