const CustomError = require("./custom-error")
const BadRequestError = require('./bad.request')
const { StatusCodes } = require('http-status-codes')

class NotFound extends CustomError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFound