const jwt = require('../services/jwt');
const express = require('express')
const UserModel = require('../models/userModel')

async function signin(req, res) {
    let names = req.body.names;

    const user = await UserModel.find({
        "names": names,
    })
    if (!user[0]) {
        return res.status(401).json({
            message: 'EL USUARIO NO EXISTE'
        });
    } else {
        let perfil = {
            token: jwt.createUserToken({
                names: user.name,
            }),
            user: user[0]
        }
        res.status(200).json(perfil);
        if (err) throw err;
    }
}

async function addUser(req, res) {
    const { body } = req;
    const newUser = new UserModel(body)
    await newUser.save();
    res.json({ message: "Guardado" })
    if (err) throw err;
};

async function logout(req, res) {
    console.log(req)
};

module.exports = {
    addUser,
    signin,
    logout
}