const express = require("express");
const router = express.Router();
const signUp =require("../controller/user.contorller")


router.post("/signup", signUp);

module.exports = router;
