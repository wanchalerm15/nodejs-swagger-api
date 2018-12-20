const router = require('express').Router();
module.exports = function () {
    router.use('/api/users', require('../routes/users'));
    return router;
};