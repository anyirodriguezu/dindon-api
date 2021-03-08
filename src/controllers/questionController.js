const jwt = require('../services/jwt');
const QuestionModel = require('../models/questionModel');

async function getQuestion(req, res) {
    console.log("entro")
    const questionModel = await QuestionModel.find();
    res.json(questionModel)
    if (err) throw err;
}

async function addQuestion(req, res) {
    const { body } = req;
    console.log(body)
    const newQuestion = new QuestionModel(body)
    await newQuestion.save();
    res.json({ message: "Guardado" })
    if (err) throw err;
};

module.exports = {
    getQuestion,
    addQuestion
}