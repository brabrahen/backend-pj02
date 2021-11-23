const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    tarefa: { type: String, required: true },
    descricao: { type: String },
    prioridade: { type: String, required: true },
    estado: { type: String, required: true },
    prazo: { type: String, required: true },
    dtCriacao: { type: Date, default: Date.now }
})

const todoModel = mongoose.model('todolist', todoSchema);

module.exports = todoModel;