const express = require("express");
const app = express();
const connection = require("./db");
const userRouter = require("./routers/users.router");
const authentication = require("./authentication/auth");
const cors = require("cors");

require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to clotho");
});

app.use("/api/users", userRouter);

app.listen(3000, async () => {
	try {
		await connection;
		console.log("mongodb connected...");
	} catch (error) {
		console.log("Error connecting to database");
	}
	console.log("Server running on port http://localhost:3000");
});