const express = require('express')
const router = express.Router()

router.use('/cities', require('./city'))
router.use('/organizations', require('./organization'))
module.exports = router
