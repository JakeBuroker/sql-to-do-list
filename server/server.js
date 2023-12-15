const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const todos = require('./routes/todos.router.js');

let PORT = process.env.PORT || 5001;

// Do not modify this!
if (process.env.NODE_ENV == 'test') {
  PORT = 5002;
}

app.use(express.static('./server/public'));
app.use(express.json());

app.use('/todos', todos);

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});
