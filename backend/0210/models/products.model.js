const mongoose = require("mongoose")

const prodSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true,unique: true},
    image: {type: String, required: true},
    price: {type: String, required: true},
    brandName: {type: String, required: true}
},{versionKey: false})

const ProdModel = mongoose.model("prod", prodSchema)

module.exports = ProdModel