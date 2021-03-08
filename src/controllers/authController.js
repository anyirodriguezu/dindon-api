const jwt = require('../services/jwt');
const express = require('express')
const UserModel = require('../models/userModel')

async function signin(req, res) {
    let names = req.body.names;

    try {
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

        }
    } catch (e) {
        console.log('Catch an error: ', e)
    }

}

async function addUser(req, res) {
    try {
        const { body } = req;
        const newUser = new UserModel(body)
        await newUser.save();
        res.json({ message: "Guardado" })
    } catch (e) {
        console.log('Catch an error: ', e)
    }
};

async function logout(req, res) {
    console.log(req)
};

module.exports = {
    addUser,
    signin,
    logout
}