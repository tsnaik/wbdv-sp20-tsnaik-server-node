const userModel = require('../models/users.model.server')

const createUser = (user) => {
    return userModel.create(user)
}
const findAllUsers = () => {
    return userModel.find()
}
const findUserById = (userId) => { }
const findUserByCredentials = (username, password) => {
    return userModel.findOne({
        username: username,
        password: password
    })
}

module.exports = {
    createUser, findAllUsers, findUserById, findUserByCredentials
}