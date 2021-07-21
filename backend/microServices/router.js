const express = require("express");
const router = express.Router();
const essayRoute = require("./essayModule/essayRoute");

router.use("/admin", essayRoute);
module.exports = router;
