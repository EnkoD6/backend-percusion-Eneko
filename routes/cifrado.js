const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

function cifrado(req, res, next){
    let username = req.body;
    username.password = bcrypt.hashSync(username.password, 10);
    req.body = username;
    next();
}

module.exports = cifrado;