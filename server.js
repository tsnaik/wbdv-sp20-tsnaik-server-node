const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const PORT = process.env.PORT || 5000; 
app.use(bodyParser.json())
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard-cs5610-sp20',
    { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.get('/hello', (req, res) => res.send("hello world"));

app.listen(PORT);
