const knexFile = require("../knexFile.js");
module.exports.config = { db: knexFile.development };
