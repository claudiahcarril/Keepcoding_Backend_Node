'user strict';

// Loading Anuncio model
const Anuncio = require('../../models/Anuncio')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find()
        res.json({ results : anuncios })
    } catch (err){
        next(err)
    }
})







module.exports = router