const mongoose = require("mongoose");

const prodSchema = mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: { type: String, required: true },
		category: { type: String, required: true, unique: true },
		image: { type: Array, required: true },
		price: { type: String, required: true },
		brandName: { type: String, required: true },
		swatches: Array,
	},
	{ versionKey: false, timestamps: true }
);

const CartModel = mongoose.model("cart", prodSchema);

module.exports = { CartModel };
