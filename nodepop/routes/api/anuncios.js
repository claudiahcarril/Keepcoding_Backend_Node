'user strict';

// Loading Anuncio model
var Anuncio = require('../../models/Anuncio')

const express = require('express')
var createError = require('http-errors')
const router = express.Router()


// GET Static Methods
router.get('/', async (req, res, next) => {
    try {
        // Static Methods "Lista"
        const name = req.query.name
        const tags = req.query.tags
        const sale = req.query.sale
        const minPrice = req.query.minPrice
        const maxPrice = req.query.maxPrice

        const skip = req.query.skip
        const limit = req.query.limit

        const fields = req.query.fields
        const sort = req.query.sort

        const filtro = {}

        if (name) {
            filtro.name = { $regex: new RegExp(`^${name}`, 'i') }
        }
        if (sale) {
            filtro.sale = sale
        }
        if (minPrice && maxPrice) {
            filtro.price = { $gte: minPrice, $lte: maxPrice }
        } else if (minPrice) {
            filtro.price = { $gte: minPrice }
        } else if (maxPrice) {
            filtro.price = { $lte: maxPrice }
        }
        if (tags) {
            filtro.tags = tags
        }


        const anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort)
        res.json({ results: anuncios })

    } catch(err) {
        next(err)
    }
})



// GET /api/anuncios/(id)
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const anuncio = await Anuncio.findById(id)
        res.json({ result: anuncio })
        console.log(req.body)
    } catch (err) {
        next(err)
    }
})


// GET /api/anuncios/tags
router.get('/tags', async (req, res, next) => {
    try {
        const tags = req.query.tags
        console.log(req.query.tags)
        const tagsFound = await Anuncio.find(tags)
        res.json({ result: tagsFound })
        console.log(tagsFound)

    } catch(err) {
        next(err)
    }
})



// PUT /api/anuncios/(id)
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const anuncioData = req.body
        console.log(req.params.id)
        console.log(req.body)
        const anuncioUpdated = await Anuncio.findOneAndUpdate({ _id: id}, anuncioData, {
            new: true
        })
        res.json({ result: anuncioUpdated })
        // console.log(anuncioUpdated)

    } catch (err) {
        next(err)
    }
})


// POST /api/anuncios
router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body
        
        console.log(anuncioData)
        
        const anuncio = new Anuncio(anuncioData)
        const anuncioSaved = await anuncio.save()
        res.json({ result: anuncioSaved })
        
        console.log(`Anuncio creado: ${anuncioSaved} `)

    } catch (err) {
        next(err)
    }
})


// DELETE /api/anuncios/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const response = await Anuncio.deleteOne({ _id: id })
        
        if (!response.deletedCount) {
            return next(createError(404))
        }

        res.json()
    } catch (err) {
        next(err)
    }
})

router.post('/en_el_body', (req, res, next) => {
    console.log(req.body)
    res.send('ok')
  })
  

module.exports = router