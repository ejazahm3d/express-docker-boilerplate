const express = require("express");
const { getValues, getValueById } = require("../../controllers/testController");

const router = express.Router();

router.get("/", getValues);
router.get("/:id", getValueById);

module.exports = router;
