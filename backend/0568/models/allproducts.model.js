const mongoose = require("mongoose");

const prodSchema = mongoose.Schema(
	{
		title: { type: String, required: true },
		category: { type: String, required: true, unique: true },
		image: { type: Array, required: true },
		price: { type: String, required: true },
		brandName: { type: String, required: true },
	},
	{ versionKey: false }
);

const AllProductModel = mongoose.model("allproduct", prodSchema);

module.exports = { AllProductModel };
