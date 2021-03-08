const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionModel = new Schema({
    apiVersion: { type: String, required: true },
    data: {
        questions: [{
            question_text: { type: String },
            question_options: [
                {
                    option_text: { type: String },
                },
            ]
        }]
    }
}, { timestamps: true })
module.exports = mongoose.model('questionSchema', QuestionModel);
