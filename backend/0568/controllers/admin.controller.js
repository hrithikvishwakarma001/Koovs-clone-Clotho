const bcrypt = require("bcrypt");
const AdminModel = require("../models/admin.model");

exports.getAllAdmins = async (req, res) => {
	try {
		const admin = await AdminModel.find();
		res.send(admin);
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.log(error);
	}
};

exports.getAdminById = async (req, res) => {
	const { id } = req.params;
	try {
		const admin = await AdminModel.findById(id);
		res.send(admin);
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.log(error);
	}
};

exports.addAdmin = async (req, res) => {
	const newAdmin = new AdminModel(req.body);
	console.log('👻 -> file: admin.controller.js:27 -> exports.addAdmin= -> req.body:', req.body)
	const { password, email } = req.body;
	try {
		const admin = await AdminModel.findOne({ email });
		console.log('👻 -> file: admin.controller.js:31 -> exports.addAdmin= -> admin:', admin)
		if (admin) {
			return res.status(403).json({ Error: "Admin already exsisted!" });
		}
		bcrypt.hash(password, 5, async (err, hash) => {
			if (err) {
				res.status(500).json({ err: err.message });
			} else {
				newAdmin.password = hash;
				await newAdmin.save();
			}
		});
		res.status(200).json({ msg: "Admin registered successfully" });
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
};

exports.loginAdmin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const admin = await AdminModel.findOne({ email });
		bcrypt.compare(password, admin.password, (err, result) => {
			if (err) {
				res.status(500).json({ err: err.message });
			} else if (!result) {
				res.status(400).json({ msg: "Invalid credentials" });
			} else {
				res.status(200).json({
					msg: "Admin logged in successfully",
				});
			}
		});
	} catch (error) {
		res.status(400).json({ err: error.message });
	}
};
