const express = require('express');
const { json, urlencoded } = require('body-parser');
const swagger = require('./configs/swagger');
const router = require('./configs/router');
const server = express();
const port = process.env.PORT || 3000;

server.use(json());
server.use(urlencoded({ extended: true }));

server.use(router());
server.use(swagger());

server.listen(port, _ => console.log(`Server started port ${port}`));