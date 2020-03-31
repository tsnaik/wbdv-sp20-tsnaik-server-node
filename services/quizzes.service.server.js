const quizzesDao = require('../dao/quizzes.dao.server')
const quizzes = require('./quizzes')
findAllQuizzes = () => quizzesDao.findAllQuizzes();

findQuizById = (quizId) => quizzesDao.findQuizById(quizId);

module.exports = {
    findAllQuizzes,
    findQuizById
}