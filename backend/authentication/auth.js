const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) return res.status(400).json({ msg: "Token not found" });
	jwt.verify(token.split(" ")[1], "secret", (err, decoded) => {
		if (err) {
			return res.status(400).json({ err: err.message });
		}
		if (decoded) {
			console.log(
				"👻 -> file: auth.js:11 -> jwt.verify -> decoded:",
				decoded
			);
			req.user = decoded;
			next();
		} else {
			res.status(400).json({ msg: "Invalid token" });
		}
	});
};

module.exports = auth;
