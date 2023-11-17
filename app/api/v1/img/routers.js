const router = require('express').Router()
const { create } = require('./controllers')

router.post('/todos', create)


module.exports = router