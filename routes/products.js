var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET products listing. */
router.get("/", function (req, res, next) {
  db(`SELECT * FROM products;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/* POST product listing. */
router.post("/", function (req, res, next) {
  const {
    name,
    unit_price,
    units,
    description,
    tax_code,
    seller_id,
    isPerishable,
    shelf_life_count,
    shelf_life_units,
  } = req.body;
  db(
    `INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units) 
    VALUES (${name},	${unit_price},	${units},	${description}, ${tax_code}, ${seller_id},
    ${isPerishable}, ${shelf_life_count}, ${shelf_life_units});`
  )
    .then((results) =>
      res.send({
        msg: `${name} added.`,
      })
    )
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
