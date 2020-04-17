const quizzesDao = require('../dao/quizzes.dao.server')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }