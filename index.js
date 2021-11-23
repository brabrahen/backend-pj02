const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');
const app = express();

app.use(express.json());
app.use(cors());

const TodoRouter = require('./routes/todo.routes')

app.use('/todo', TodoRouter);

Conn();

const port = 3001;
app.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:3001/`)
})