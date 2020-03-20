const questionsService = require('../services/questions.service.server');

module.exports = function (app) {
    app.get('/api/quizzes/:quizId/questions', (req, res) => 
        res.json(questionsService.findQuestionsForQuiz(req.params.quizId)));
        
}