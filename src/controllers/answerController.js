const jwt = require('../services/jwt');
const AnswerModel = require('../models/answerModel');

async function getAnswer(req, res) {
    const answerModel = await AnswerModel.find();
    res.json(answerModel)
}

async function addAnswer(req, res) {
    const { body } = req;
    console.log(body)
    const newAnswer = new AnswerModel(body)
    await newAnswer.save();
    res.json({ message: "Guardado" })
};

module.exports = {
    getAnswer,
    addAnswer
}