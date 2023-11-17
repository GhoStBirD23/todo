const router = require('express').Router()
const { createTodos, getAllTodos, getOneTodo, del, update } = require('./controllers')

router.post('/todos', createTodos)
router.get('/todos', getAllTodos)
router.get('/todos/:id', getOneTodo)
router.delete('/del/:id', del)
router.put('/update/:id', update)

module.exports = router