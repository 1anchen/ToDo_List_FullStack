const FormView = require('./views/form_view.js')
const GridListView = require('./views/gridlist_view.js');
const ToDos = require('./models/todos.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form#todo-form');
  // const formView = new FormView(form);
  // formView.bindEvents();

  // const container = document.querySelector('div#todolist');
  // const gridListView = new GridListView(container);
  // gridListView.bindEvents();

  const todosUrl = 'http://localhost:3000/api/todos';
  const todos = new ToDos(todosUrl);
  todos.bindEvents();
  todos.getData();
});
