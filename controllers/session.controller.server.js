module.exports = (app) => {
    function setSession(req, res) {
        const name = req.params['name'];
        const value = req.params['value'];
        req.session[name] = value;
        res.send(req.session);
    }

    function getSession(req, res) {
        const name = req.params['name'];
        const value = req.session[name];
        res.send(value);
    }

    app.get('/api/session/set/:name/:value',
        setSession);
    app.get('/api/session/get/:name',
        getSession);
    // app.get('/api/session/get',
    //     getSessionAll);
    // app.get('/api/session/reset',
    //     resetSession);

}