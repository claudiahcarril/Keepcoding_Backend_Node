'user strict';

// Loading Anuncio model
const Anuncio = require('../../models/Anuncio')

const express = require('express')
var createError = require('http-errors')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const anuncios = await Anuncio.find()
        res.json({ results : anuncios })
    } catch (err){
        next(err)
    }
})


// PUT /api/anuncios/(id)
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const anuncioData = req.body
        const anuncioUpdated = await Anuncio.findOneAndUpdate({ _id: id}, anuncioData, {
            new: true
        })
        res.json({ result: anuncioUpdated })
    } catch (err) {
        next(err)
    }
})


// POST /api/anuncios
router.post('/', async (req, res, next) =>{
    try {
        const anuncioData = req.body
        const anuncio = new Anuncio(anuncioData)
        const anuncioSaved = await anuncio.save()
        res.json({ result: anuncioSaved })
    } catch (err) {
        next(err)
    }
})


// DELETE /api/anuncios/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const anuncio = await Anuncio.deleteOne({ id })

        if (!anuncio) {
            return next(createError(404))
        }

        res.json()
    } catch (err) {
        next(err)
    }
})



module.exports = router