const express = require('express');
const app = express();

require('./controllers/quizzes.controller.server')(app);
require('./controllers/questions.controller.server')(app);

app.get('/hello', (req, res) => res.send("hello world"));

app.listen(3000);