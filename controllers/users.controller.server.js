const userDao = require('../dao/users.dao.server')
module.exports = (app) => {
    app.post('/api/users', async (req, res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser);
        res.send(actualUser);
    })

    // not final. just for practice
    app.get('/api/users', async (req, res) => {
        const users = await userDao.findAllUsers();
        res.send(users);
    })
}