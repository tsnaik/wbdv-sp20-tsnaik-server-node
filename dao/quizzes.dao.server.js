const quizzesModel = require('../models/quizzes/quizzes.model.sever');

const findAllQuizzes = () => quizzesModel.find();
const findQuizById = (qid) => quizzesModel.findById(qid);
const createQuiz = (quiz) => quizzesModel.create(quiz)

module.exports = {
    createQuiz, findAllQuizzes, findQuizById
}