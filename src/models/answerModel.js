const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerModel = new Schema({
    answers: [
        { id: { type: String }, option: { id: { type: String } } },
    ]
})
module.exports = mongoose.model('answerSchema', AnswerModel);