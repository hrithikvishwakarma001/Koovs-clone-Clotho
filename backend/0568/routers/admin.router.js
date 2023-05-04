const { Router } = require("express");
const adminRouter = Router();
const controller = require("../controllers/admin.controller.js");


adminRouter.get("/", controller.getAllAdmins);
adminRouter.get("/:id", controller.getAdminById);
adminRouter.post("/register", controller.addAdmin);
adminRouter.post("/login", controller.loginAdmin);

module.exports = adminRouter;