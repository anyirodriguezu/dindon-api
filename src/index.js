const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const url = process.env.DB || "mongodb+srv://dindon:dindon@cluster0.g8s9q.mongodb.net/test?authSource=admin"
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

mongoose.connect(url, options)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}));

const authRouter = require('./routes/authRoutes');
const questionRouter = require('./routes/questionRouter');
const answerRouter = require('./routes/answerRouter')

app.use('/auth', authRouter)
app.use('/question', questionRouter);
app.use('/answer', answerRouter)

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});