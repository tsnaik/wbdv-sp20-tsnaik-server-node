
const mongoose = require('mongoose')
const questionSchema = require('../questions/questions.schema.server')
const quizAttempts = mongoose.Schema({
   score: Number,
   quiz: {type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttemptModel'},
   answers: [questionSchema]
}, {collection: 'quizAttempts'})
module.exports = quizAttempts
