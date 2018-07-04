const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://localhost:27017',
  (err, client) => {
    const db = client.db('todo_hub');
    const todoCollection = db.collection('todos');
    const todoRouter = createRouter(todoCollection);
    app.use('/api/todos', todoRouter);
});

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
