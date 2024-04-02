const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: 'Lakes Api',
        description: 'Lakes Api'
    },
    host: 'localhost:8080',
    schemes: ['http','https']
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

//this will generate the swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc)