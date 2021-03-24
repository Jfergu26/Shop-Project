const mongoose = require('mongoose')

const item = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    rating: Number,
    numOfRatings: Number,
    description: String,
    img: String, //will just use a filepath in the project to display the img for now.
},{
    collection: Item
})

module.exports = mongoose.model('Item', item)