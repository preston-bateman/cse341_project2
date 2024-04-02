const express = require('express')
const router = require('express').Router()


const lakesController = require('../controllers/index.js')

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags['Welcome to Lakes API']
    res.send('Welcome to the Lakes API')
})

router.get('/all', lakesController.getAll)

router.get('/:id', lakesController.getSingle)

router.post('/', lakesController.createLake)

router.put('/:id', lakesController.updateLake)

router.delete('/:id', lakesController.deleteLake)

module.exports = router