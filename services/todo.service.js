const TodoModel = require('./../models/todolist');

class todoService {
    findAll = async () => await TodoModel.find();

    findById = async (id) => {
        return await TodoModel.findById(id)
    };

    create = async (todolist) => {
        return await TodoModel.create(todolist)
    };

    edit = async (id, todolist) => {
        return await TodoModel.updateOne({_id: id}, todolist)
    };

    delete = async (id) => {
        return await TodoModel.deleteOne({_id: id})
    };
}

module.exports = todoService;