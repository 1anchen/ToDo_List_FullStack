const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newThing = this.createThing(evt.target);
  PubSub.publish('FormView:form-submitted', newThing);
  evt.target.reset();
};

FormView.prototype.createThing = function (form) {
  const newThing = {
    thing: form.todo.value,
    date: form.date.value,
  }
  return newThing;
};



module.exports = FormView;
