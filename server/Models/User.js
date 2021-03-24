const mongoose = require('mongoose')

const user = new mongoose.Schema({

    username: String,
    password: String,
    itemsBought: [{
        id:Number,
        userRating: Number,
    }],  // item id array
    itemsInCart: [{
        id:Number,
    }]
},{
    collection: Users
})

module.exports = mongoose.model('User', user)