const questions = require('./questions')

findAllQuestions = () => questions;

findQuestionById = (qId) =>
    questions.find(question =>
        question._id === qId);

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}