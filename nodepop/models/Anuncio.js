'user strict';

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: Array
})

// Static Methods
anuncioSchema.statics.lista = function(filter, skip, limit, fields, sort) {
    const query = Anuncio.find(filter)
    query.skip(skip)
    query.limit(limit)
    query.select(fields)
    query.sort(sort)
    return query.exec()
}


const Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports = Anuncio