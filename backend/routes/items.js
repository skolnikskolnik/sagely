const express = require('express')
const { getItems, getItem } = require('../controllers/itemController')

const router = express.Router()

// get all of the items
router.get('/', getItems)

// get a single item
router.get('/:id', getItem)

module.exports = router