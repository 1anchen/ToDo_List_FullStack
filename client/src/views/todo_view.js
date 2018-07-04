const PubSub = require('../helpers/pub_sub.js');

const TodoView = function (container) {
  this.container = container;
};

TodoView.prototype.render = function (todo) {
  const container = document.createElement('div');
  container.id = 'todo-item';

  const thing = this.createDetail(todo.thing);
  container.appendChild(thing);

  const timeText = `${todo.date}`;
  const time = this.createDetail(timeText);
  container.appendChild(time);


  const deleteButton = this.createDeleteButton(todo._id);
  console.log(todo._id);
  container.appendChild(deleteButton);

  this.container.appendChild(container);
};

TodoView.prototype.createDetail = function (textContent) {
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

TodoView.prototype.createDeleteButton = function (todoID) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.textContent = "Delete"
  button.value = todoID;

  button.addEventListener('click', (evt) => {
    PubSub.publish('TodoView:thing-delete-clicked', evt.target.value);
  });

  return button;
};

module.exports = TodoView;
