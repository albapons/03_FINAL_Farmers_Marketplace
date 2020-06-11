var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// /* GET products filtered by name */
// router.get("/", function (req, res, next) {
//   const { name } = req.query;
//   let query = "";
//   if (name) query = `SELECT * FROM products WHERE name LIKE "%${name}%";`;
//   else query = `SELECT * FROM products;`;
//   db(query)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });

/* GET products filtered by name */
router.get("/", function (req, res, next) {
  const { name } = req.query;
  let query = "";
  if (name)
    query = `SELECT * FROM products LEFT JOIN users ON users.id = products.seller_id WHERE name LIKE "%${name}%";`;
  else
    query = `SELECT * FROM products LEFT JOIN users ON users.id = products.seller_id;`;
  db(query)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// /* GET products listing. */
// router.get("/:id", function (req, res, next) {
//   const { id } = req.params;
//   db(`SELECT * FROM products where id = ${id};`)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });

/* GET products listing. */
router.get("/:id/", function (req, res, next) {
  const { id } = req.params;
  db(
    `SELECT * FROM products LEFT JOIN users ON users.id = products.seller_id WHERE products.id = ${id};`
  )
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
    VALUES ("${name}",	"${unit_price}",	"${units}",	"${description}", "${tax_code}", "${seller_id}",
    "${isPerishable}", "${shelf_life_count}", "${shelf_life_units}");`
  )
    .then((results) =>
      res.send({
        msg: `${name} added.`,
      })
    )
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
