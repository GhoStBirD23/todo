const mongoose = require('mongoose')
const { model, Schema} = mongoose

const Todos = Schema(
    {
        title: {
            type: String,
            minlenght: [3, 'title min 3 character'],
            maxlenght: [50, 'title max 50 character'],
            required: true
        },
        desc: {
            type: String,
            minlenght: [3, 'title min 3 character'],
            maxlenght: [50, 'title max 50 character']
        },
        is_done: {
            type: Boolean,
            default: false
        },
    },
    { timestamp: true }
)

module.exports = model('todo', Todos)