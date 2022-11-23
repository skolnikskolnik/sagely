const mongoose = require('mongoose')

const Schema = mongoose.Schema

// There is likely a better data type than string for the dates
// The item_type can be restricted to only certain values
// Some values should be required 
const itemSchema = new Schema({
    url: {
        type: String,
    },
    manual_tags: {
        type: String,
    },
    abstract_note: {
        type: String,
    },
    date: {
        type: String,
    },
    date_added: {
        type: String,
    },
    date_modified: {
        type: String,
    },
    access_date: {
        type: String,
    },
    key: {
        type: String,
    },
    item_type: {
        type: String,
    },
    publication_year: {
        type: String,
    },
    author: {
        type: String,
    },
    title: {
        type: String,
    },
}, { timestamps: false })

const allItems = mongoose.model('Item', itemSchema)
module.exports = allItems