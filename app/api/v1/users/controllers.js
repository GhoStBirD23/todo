const Users = require('./models')
const { BadRequestError, Unauthenticated } = require('../../../error')
const { createJWT, createTokenUser } = require('../../../utils')
const { StatusCodes } = require('http-status-codes')

const register = async(req, res, next) => {
    try{
        const { username, email, password, confirmPassword } = req.body
        if(password !== confirmPassword) throw new BadRequestError('password dan confirm password tidak cocok')

        const result = await Users.create({ username, email, password })

        const token = createJWT({ payload: createTokenUser(result)})
        res.status(StatusCodes.CREATED).json({ status: 'succes', token })
    } catch(err) {
        next(err);
    }
}

const login = async(req, res, next) => {
    try{
        const { email, password } = req.body
        if (!email || !password) throw new BadRequestError('please provide email & password')

        const result = await Users.findOne({ email })
        if(!result) throw new UnauthenticatedError('invalid credentials')

        const isPasswordCorrect = await result.comparePassword(password)
        if(!isPasswordCorrect) throw new Unauthenticated('invalid credentials')

        const token = createJWT({payload: createTokenUser(result)})
        res.status(StatusCodes.OK).json({ status: 'succes', token })
    } catch(err) {
        next(error);
    }
}

module.exports = { register, login }