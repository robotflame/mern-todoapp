const mongoose = require('mongoose')
const ToDoSchema = new mongoose.Schema({
    task: String
})

const TodoModel = mongoose.model ("todos", ToDoSchema)
module.exports = TodoModel