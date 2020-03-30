const express = require('express');
const users = express.Router();
const usersController = require('../controllers').users;
/* GET users listing. */
users.get('/', usersController.getUsers);

module.exports = users;
