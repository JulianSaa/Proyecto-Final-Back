const express = require('express')
const router = express.Router()
const login = require('../controllers/loginControllers')


router.post('/', login.loginController)
router.post('/signup', login.singupController)

module.exports = router