const userDao = require('../dao/users.dao.server')
module.exports = (app) => {
    app.post('api/users', (req, res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser);
        res.send(actualUser);
    })
}