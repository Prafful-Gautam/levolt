const essayController = require("./essayController");
const express = require("express");
const router = require("../router");
// const router = require("../router");
const routers = express.Router();

routers.route("/essay").post(essayController.AddEssay);
routers.route("/essay").get(essayController.GetAllEssay);
routers.route("/essay/:id").get(essayController.GetSingleEssay);
routers.route("/essay/:id").put(essayController.UpdateEssay);

module.exports = routers;
