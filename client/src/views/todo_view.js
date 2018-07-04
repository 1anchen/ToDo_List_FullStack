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


  // const deleteButton = this.createDeleteButton(game._id);
  // gameContainer.appendChild(deleteButton);

  this.container.appendChild(container);
};

TodoView.prototype.createDetail = function (textContent) {
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

// GameView.prototype.createDeleteButton = function (gameId) {
//   const button = document.createElement('button');
//   button.classList.add('delete-btn');
//   button.value = gameId;
//
//   button.addEventListener('click', (evt) => {
//     PubSub.publish('GameView:game-delete-clicked', evt.target.value);
//   });
//
//   return button;
// };

module.exports = TodoView;
