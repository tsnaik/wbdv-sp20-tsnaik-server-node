const quizzesService = require('../services/quizzes.service.server');

module.exports = function (app) {
    app.get('/api/quizzes', async (req, res) => {
        const allQuizzes = await quizzesService.findAllQuizzes();
        console.log(allQuizzes)
        res.json(allQuizzes);
    });

    app.get('/api/quizzes/:quizId', async (req, res) => {
        res.json(await quizzesService.findQuizById(req.params.quizId));
    });
}