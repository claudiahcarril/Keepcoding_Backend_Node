'user strict';

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    name: {type: String, unique: true},
    sale: {type: Boolean, unique: true},
    price: {type: Number, unique: true},
    photo: {type: String, unique: true},
    tags: {type: Array, unique: true}
})

// Static Methods
anuncioSchema.statics.lista = function(filtro, skip, limit, fields, sort) {
    const query = Anuncio.find(filtro)
    query.skip(skip)
    query.limit(limit)
    query.select(fields)
    query.sort(sort)
    return query.exec()
}


const Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports = Anuncio