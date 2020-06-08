var express = require("express");
var router = express.Router();


/* GET users listing. */
router.get("/", function (req, res, next) {
  db(`SELECT * FROM users WHERE users.isSeller=1;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));

});





module.exports = router;
