const express = require('express')
const router = require('express').Router()


const lakesController = require('../controllers/index.js')

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //#swagger.tags['Welcome to Lakes API']
    res.send('Welcome to the Lakes API')
})

router.get('/lakes/', lakesController.getAll)

router.get('/lakes/:id', lakesController.getSingle)

router.post('/lakes/', lakesController.createLake)

router.put('/lakes/:id', lakesController.updateLake)

router.delete('/lakes/:id', lakesController.deleteLake)

module.exports = router