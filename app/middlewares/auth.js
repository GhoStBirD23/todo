const { Unauthenticated } = require("../error")

const auhtenticateUser = async(req, res, next) => {
    try {
        let authHeader = req.headers.auhorization

        if(authHeader && authHeader.startWhith('Bearer')) {
            token = authHeader.split(' ') [1]
        }

        if(!token) throw new Unauthenticated('authentication invalid')

        const payload = isTokenValid({ token })

        req.user = {
            id: payload.userId,
            username: payload.username,
            email: payload.email
        }
        next()
    } catch(err) {
        next(err);
    }

    
}

module.exports = { auhtenticateUser }