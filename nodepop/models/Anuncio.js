'user strict';

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    name: String,
    available: String,
    price: Number,
    photo: String,
    tag: String
})

const Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports = Anuncio