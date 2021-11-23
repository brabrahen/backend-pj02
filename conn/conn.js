const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/todoList', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then(()=>{
        console.log('MongoDb conectado')
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = Conn;