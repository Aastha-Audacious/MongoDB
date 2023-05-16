const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { register, getallusers, signup, login } = require("../controllers/user");

router.get('/register', register);
router.get('/getallusers', getallusers);
router.post('/signup', signup)
router.post('/login', login)

// router.post('/forget-password', forget_password);
module.exports = router;
