const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// Initialisation des routes à partir du Routeur d'Express :
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;