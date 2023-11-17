const mongoose = require('mongoose')
const { model, Schema} = mongoose
const bcrypt = require("bcryptjs")

const Users = Schema(
    {
        username: {
            type: String,
            maxlenght: [50, 'title max 50 character'],
            required: true,
            unique: true
        },
        email: {
            type: String,
            unique: true,
        },
        password:{
            type: String,
            minlength: [8, 'password min 8 character']
        },
        avatar:{
            type: mongoose.Types.ObjectId,
            ref: 'Image'
        }

    },
    { timestamp: true }
)

Users.pre('save', async function(next) {
    const User = this;
    if(User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next()
})

Users.methods.comparePassword = async function(canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch;
}

module.exports = model('user', Users)