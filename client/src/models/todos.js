const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const ToDos = function(url){
  this.url = url;
};

ToDos.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then(todos => {
    PubSub.publish('ToDos:data-loaded', todos);
  })
  .catch(console.error);
};

ToDos.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:form-submitted', (evt) => {
    this.postTodo(evt.detail);
  })

  PubSub.subscribe('TodoView:thing-delete-clicked', (evt) => {
    this.deleteThing(evt.detail);
  })

  PubSub.subscribe('TodoView:thing-done-clicked', (evt) => {
    this.doneThing(evt.detail);
  })

};

ToDos.prototype.postTodo = function (todo) {
  const request = new Request(this.url);
  request.post(todo)
  .then((todos) => {
    PubSub.publish('ToDos:data-loaded', todos);
  })
  .catch(console.error);
};

ToDos.prototype.deleteThing = function (todoId) {
  const request = new Request(this.url);
  request.delete(todoId)
    .then((things) => {
      PubSub.publish('ToDos:data-loaded', things);
    })
    .catch(console.error);
};


ToDos.prototype.doneThing = function (todoId) {
  const request = new Request(this.url);
  console.log(todoId);
  request.get()
    .then((things) => {
      const selectedThing = things.find((thing) => todoId === thing._id);
      selectedThing.date = 'Done';
      console.log(selectedThing);
      PubSub.publish('ToDos:data-loaded', things);
    })
    .catch(console.error);
};




module.exports = ToDos;
