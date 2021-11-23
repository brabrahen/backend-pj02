const express = require('express');
const TodoController = require('./../controller/todo.controller');
const todoController = new TodoController;

const router = express.Router();

router.get('/', todoController.getTask);

router.get('/:id', todoController.taskById);

router.post('/add', todoController.createTask);

router.put('/:id', todoController.editTask);

router.delete('/:id', todoController.deleteTask);

module.exports = router;