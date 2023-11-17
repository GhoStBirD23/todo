const Todos = require('./models')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../../../error/index')

const createTodos = async(req, res, next) => {
    try {
        const { Judul, Ket } = req.body

        const result = await Todos.create({
            title: Judul,
            desc: Ket
        })
        res.status(StatusCodes.CREATED).json({ status: 'succes', todos: result })
    } catch (error) {
        next(error)
    }
}

const getAllTodos = async(req, res, next) => {
    try {
        const result = await Todos.find()
        res.status(StatusCodes.OK).json({ status: 'succes', data: result})
    } catch (err) {
        next(err)
    }
}

const getOneTodo = async(req, res, next) => {
    try {
        const { id } = req. params
        const result = await Todos.findOne({ _id: id })
        if(!result) throw new NotFoundError('todos not found')

        res.status(StatusCodes.OK).json({ status: 'succes', todo: result })
    } catch (err) {
        next(err)
    }
}

const del = async (req, res, next) => {
    const { id } = req.params
    const result = await Todos.findOneAndDelete({ _id: id })
    if(!result) throw new NotFoundError(` Todos Not Found : ${id}`)
    res.status(StatusCodes.OK).json({ status: 'succes', message: 'result' })
}

const update = async (req, res, next) => {
    try{
        const { id } = req.params
        const { Judul, Ket } = req.body
        const result = await Todos.findOneAndUpdate(
            { _id: id },
            { title: Judul, desc: Ket },
            { new: true, runValidators: true })
        if(!result) throw new NotFoundError(` Todos Not Found : ${id}`)
        res.status(StatusCodes.OK).json({ status: 'succes', message: 'result' })
    } catch(err){
        next(err)
    }
}





module.exports = { createTodos, getAllTodos, getOneTodo, del, update }