var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
// var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

var db = require("../model/helper");
require("dotenv").config();

const supersecret = process.env.SUPER_SECRET;

router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  db(
    `SELECT * FROM users WHERE username = "${username}" AND password= "${password}";`
  ).then((results) => {
    if (results.data.length) {
     
      var token = jwt.sign({ userId: results.data[0].id }, supersecret);
      res.send({ message: "User OK, here is your token!", token});
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  });
});

router.get("/profile", function (req, res, next) {

  const token = req.headers["x-access-token"]
  if(!token) {
    res.status(401).send({message:"Please log in!"})
  }
  else {
    jwt.verify(token, supersecret, function (err, decoded) {
      if(err) res.status(401).send({message: err.message})
      else {
        res.send({message: "Here is your private information!", decoded})
      }
    })
  }

  })



module.exports = router;
