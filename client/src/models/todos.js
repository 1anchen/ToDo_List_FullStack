const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const ToDos = function(url){
  this.url = url;
};

ToDos.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then(todos => {
      console.log(todos);
      PubSub.publish('ToDos:data-loaded', todos);
    })
    .catch(console.error);
};

ToDos.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:form-submitted', (evt) => {
    this.postTodo(evt.detail);
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

module.exports = ToDos;
