const express = require('express')
const protect = require('../m')
const {createNote,getNote} = require('../middleware/')

const router = express.router

router.get('/yourNotes',protect,getNote)
router.post('yourNotes',protect,createNote)

module.exports = router