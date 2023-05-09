const mongoose = require("mongoose");

const prodSchema = mongoose.Schema(
	{
		userInfo: Object,
		credentials: Object,
		address: Object,
		cartData: Array,
		total: Number,
	},
	{ versionKey: false, timestamps: true }
);

const OderModel = mongoose.model("order", prodSchema);

module.exports = { OderModel };
