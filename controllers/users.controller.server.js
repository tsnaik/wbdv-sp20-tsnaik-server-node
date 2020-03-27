const userDao = require('../dao/users.dao.server')
module.exports = (app) => {
    app.post('/api/users', async (req, res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser);
        res.send(actualUser);
    })
    


    app.post('/api/login', async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await userDao.findUserByCredentials(username, password);
        if(user) {
            user.password = '**';
            return res.send(user);
        } else {
            return res.status(403).send({
                message: `User ${username} not found`
            })
        }
    })

    // not final. just for practice
    app.get('/api/users', async (req, res) => {
        const users = await userDao.findAllUsers();
        res.send(users);
    })
}