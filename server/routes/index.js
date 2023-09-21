'use strict'
const UserController = require('../controllers/UserController')
const DataController = require('../controllers/DataController')

const router = require('express').Router();


router.post('/login',UserController.login)
router.get('/data', DataController.fetchData)
router.get('/data/:id', DataController.fetchDetail)


module.exports = router;