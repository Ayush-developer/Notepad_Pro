const express = require('express')
const {register,login,logout} = require('../controllers/authController')

const router = express.router

router.post('/login', login)
router.post('/register', register)
router.get('/logout', logout)

exports.module = router