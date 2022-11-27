const { isValidObjectId } = require('mongoose')
const Item = require('../models/itemModel')

// get all items
const getItems = async (req, res) => {
    const items = await Item.find({})
    res.status(200).json(items)
}

// get a single item
const getItem = async (req, res) => {
    const { id } = req.params

    // check if it is a valid item id to prevent app crashes if user modifies URL
    if (!isValidObjectId(id)) {
        return res.status(400).json({ error: 'Not a valid item id' })
    }


    const item = await Item.findById(id)

    if (!item) return res.status(404).json({ error: 'No such item' })

    res.status(200).json(item)
}

module.exports = {
    getItems,
    getItem,
}
