const express = require("express");
const app = express();
const connection = require("./db");
const userRouter = require("./0568/routers/users.router");
const adminRouter = require("./0568/routers/admin.router");
const authentication = require("./0568/authentication/auth");
const cors = require("cors");
const { prodRouter } = require("./0210/routers/products.router");
const { WomenRouter } = require("./0568/routers/women.router");
const { allProductRouter } = require("./0568/routers/allproducts.router");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	``;
	res.send("Welcome to clotho");
});

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);

app.use("/api/products/men", prodRouter);
app.use("/api/products/women", WomenRouter);
app.use("/api/products/all", allProductRouter);

app.listen(3000, async () => {
	try {
		await connection;
		console.log("mongodb connected...");
	} catch (error) {
		console.log("Error connecting to database");
	}
	console.log("Server running on port http://localhost:3000");
});
