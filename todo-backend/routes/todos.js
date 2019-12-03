var express = require('express');
var router = express.Router();
const knex = require('./../db/knex');
/* GET users listing. */

// display all todos
router.get('/', function (req, res, next) {
  knex("todos").select().orderBy('id', 'asc').then(todos => {
    // res.send(todos);
    // res.render("todos", {
    //   todos
    // })
    res.jsonp(todos);
  });
});

// create
router.get('/add', function (req, res, next) {
  res.render("addTodo");
});

function validateToDo(todo) {
  return typeof todo.title === "string" &&
    todo.title.trim() !== "" &&
    typeof todo.priority !== "undefined" &&
    !isNaN(Number(todo.priority));
}

router.post('/', function (req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority
  }
  if (validateToDo(todo)) {
    knex("todos").insert(todo).returning(["id","title","description","priority"]).then(result => {
      console.log('result...', result);
      // res.redirect('/todos');
      res.jsonp(
        result
      );
    })
  } else {
    res.end();
  }

});

// update

router.get('/edit/:id', function (req, res) {
  knex("todos").where('id', req.params.id).first().then(todo => {
    // res.send(todos);
    res.render("edit", {
      todo
    })
  });
});

router.put('/update/:id', function (req, res) {
  const todo = {
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority
  }
  if (validateToDo(todo)) {
    knex("todos").where('id', req.params.id).update(todo).then(result => {
      // console.log('result...', result);
      res.redirect('/todos');
    })
  } else {
    res.end();
  }

});

// delete

router.delete('/delete/:id', function (req, res) {
  knex("todos").returning(["id"]).where('id', req.params.id).del().then(result => {
    // console.log('result...', result);
    // res.redirect('/todos');
    res.jsonp(result[0]);

  })
});

module.exports = router;