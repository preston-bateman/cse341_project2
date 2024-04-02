const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Lakes']
    const result = await mongodb.getDatabase().db().collection('lakes').find()
}