const PubSub = require('../helpers/pub_sub.js');
const TodoView = require('./todo_view.js');

const GridListView = function (container) {
  this.container = container;
};

GridListView.prototype.bindEvents = function () {
  PubSub.subscribe('ToDos:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

GridListView.prototype.render = function (todos) {
  this.container.innerHTML = '';
  const todoView = new TodoView(this.container);
  todos.forEach((todo) => todoView.render(todo));
};

module.exports = GridListView;
