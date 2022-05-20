const express = require("express");
const router = express.Router();

const getContentList = require("../controllers/contentController");

router.route("/").get(getContentList);

module.exports = router;
