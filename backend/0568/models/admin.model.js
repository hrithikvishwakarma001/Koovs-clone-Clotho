const mongoose = require("mongoose");
const adminSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		gender: { type: String, required: true },
	},
	{ timestamps: true, versionKey: false }
);
const AdminModel = mongoose.model("admin", adminSchema);
module.exports = AdminModel;
