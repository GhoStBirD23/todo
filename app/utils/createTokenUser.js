
const createTokenUser = (Users) => {
    return {
        userId: Users._id,
        username: Users.username,
        email: Users.email
    };
};

module.exports = {createTokenUser };