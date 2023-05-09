const { Router } = require("express");

const orderRouter = Router();
const { OderModel } = require("../models/oders.model");
const e = require("express");
const authentication = require("../authentication/auth");

orderRouter.post("/create", authentication, async (req, res) => {
	try {
		const data = new OderModel(req.body);
		await data.save();
		res.send({ success: true, message: "Order placed successfully" });
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to place order",
		});
	}
});

orderRouter.get("/admin", async (req, res) => {
	try {
		const orders = await OderModel.find();
		res.json({
			success: true,
			message: "Orders fetched successfully",
			orders,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to fetch orders",
		});
	}
});

module.exports = { orderRouter };
