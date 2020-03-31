const mongoose = require('mongoose')
const quizzesSchema = mongoose.Schema({
    title: String
}, {collection: 'quizzes'})
module.exports = quizzesSchema;
