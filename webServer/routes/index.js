const express = require('express');
const index = express.Router();

index.get('/', function(req, res, next) {
  res.status(200).send({ message: 'Hello World' });
});

module.exports = index;
