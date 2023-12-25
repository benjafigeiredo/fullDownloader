const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/getAllUsers', userController.getAllUsers);

module.exports = {
    router, 
}