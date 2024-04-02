const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Lakes']
    const result = await mongodb.getDatabase().db('Project2').collection('lakes').find()
    result.toArray().then((lakes) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(lakes)
    })
}

const getSingle = async (req, res) => {
    //#swagger.tags=['Lakes']
    const lakeId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db('Project2').collection('lakes').find({ _id: lakeId })
    result.toArray().then((lakes) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(lakes[0])
    })
}

const createLake = async (req, res) => {
    //#swagger.tags=['Lakes']
    const lake = {
        name: req.body.name,
        county: req.body.county,
        percentFull: req.body.percentFull,
        capacity: req.body.capacity,
        currentStorage: req.body.currentStorage,
        boatRamps: req.body.boatRamps,
        isPublic: req.body.isPublic
    }
    const response = await mongodb.getDatabase().db('Project2').collection('lakes').insertOne(lake)
    if (response.acknowledged) {
        res.status(204).send()
    }else {
        res.status(500).json(response.error || 'An error occured while creating the contact.')
    }
}

const updateLake = async (req, res) => {
    //#swagger.tags=['Lakes']
    if(!ObjectId.isValid(req.params.id)) {
        res.status(400).json(response.error || 'You must enter a valid id')
    }

    const lakeId = new ObjectId(req.params.id)
    const lake = {
        name: req.body.name,
        county: req.body.county,
        percentFull: req.body.percentFull,
        capacity: req.body.capacity,
        currentStorage: req.body.currentStorage,
        boatRamps: req.body.boatRamps,
        isPublic: req.body.isPublic
    }
    const response = await mongodb.getDatabase().db('Project2').collection('lakes').replaceOne({ _id: lakeId }, lake)
    if (response.modifiedCount > 0) {
        res.status(204).send()
    }else {
        res.status(500).json(response.error || 'An error occured while updating the contact.')
    }
}

const deleteLake = async (req, res) => {
    //#swagger.tags=['Lakes']
    if(!ObjectId.isValid(req.params.id)) {
        res.status(400).json(response.error || 'You must enter a valid id')
    }

    const response = await mongodb.getDatabase().db('Project2').collection('lakes').deleteOne({ _id: lakeId }, true)
    if (response.deletedCount > 0) {
        res.status(204).send()
    }else {
        res.status(500).json(response.error || 'An error occured while updating the contact.')
    }
}

module.exports = {
    getAll,
    getSingle,
    createLake,
    updateLake,
    deleteLake
}