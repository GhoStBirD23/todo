const CustomError = require("./custom-error")
const { StatusCode } = require('http-status-codes')

class BadRequest extends CustomError {
    constructor (message) {
        super(message)
        this.statusCode = StatusCode.BAD_REQUEST
    }
}

module.exports = BadRequest