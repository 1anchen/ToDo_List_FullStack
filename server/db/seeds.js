use todo_hub;
db.dropDatabase();

db.todos.insertMany([
  {
    thing: "finish MVP",
    date: "2018-07-03"
  },
  {
    thing: "Have lunch",
    date: "2018-07-04"
  }
]);
