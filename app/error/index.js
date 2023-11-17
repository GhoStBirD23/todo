const CustomError = require("./bad.request")
const BadRequestError = require("./bad.request")
const NotFoundError = require("./not-found")
const Unauthenticated = require("./unauthenticated")
const Unauthorized = require("./unauthorized")

module.exports = { CustomError, BadRequestError, NotFoundError, Unauthenticated, Unauthorized}