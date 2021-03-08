const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    names: { type: String },
})

module.exports = mongoose.model('users', UserModel);
