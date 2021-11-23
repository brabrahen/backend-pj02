const TodoService = require('./../services/todo.service');
const todoService = new TodoService;

class TodoController {
    getTask = async (req, res) => {
        const todolist = await todoService.findAll();
        res.send(todolist)
    }

    taskById = async (req, res) => {
        const todolist = await todoService.findById(req.params.id);
        res.send(todolist);
    }

    createTask = async (req, res) => {
        if(!req.body){
            return;
        }
        await todoService.create(req.body)
        .then(() => {
            res.status(201).send({message: `Tarefa cadastrada com sucesso`})
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({message: `Erro no servidor`})
        })
    }

    editTask = async (req, res) => {
        await todoService.edit(req.params.id, req.body)
        .then(() => {
            res.status(201).send({message:`Tarefa editada com sucesso`})
        })
        .catch((err) => {
            res.status(500).send({message: `Erro no servidor`})
        })
    }

    deleteTask = async (req, res) => {
        await todoService.delete(req.params.id)
        .then(()=> {
            res.status(200).send({message: `Tarefa excluída com sucesso`})
        })
        .catch((err)=>{
            res.statu(500).send({message: `erro no servidor`})
        })
    }
}

module.exports = TodoController;