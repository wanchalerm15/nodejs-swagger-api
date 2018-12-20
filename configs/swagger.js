const { join } = require('path');
const express = require('express');
const router = express.Router();
const swaggerJsDoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            title: 'Expressjs swagger api',
            description: 'Api testing system by swagger and nodejs expressjs',
            version: '1.0.0'
        }
    },
    apis: [
        './routes/*.js'
    ]
};

module.exports = function () {

    router.use('/explorer', express.static(join(process.cwd(), 'explorer')));
    router.get('/swagger.json', (req, res) => res.json(swaggerJsDoc(options)));
    return router;

}