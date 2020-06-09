var express = require("express");
var router = express.Router();
const db = require("../model/helper");




const getUsers = (req, res) => {

  db(`SELECT * FROM users;`)
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));


}
/* GET users listing. */
router.get("/", getUsers);

// GET one user
router.get("/:id", function(req, res, next) {

const {id} = req.params;

db(`SELECT * FROM users WHERE id = ${id}`)
.then(results => {
  res.send(results.data[0]);
})
.catch((err) => res.status(500).send(err));

});
  


// INSERT a new user into the DB
router.post("/", function(req, res, next) {

  const { 
    firstname, 
    lastname, 
    email, 
    address1, 
    postcode, 
    city, 
    location, 
    company_name, 
    company_no, 
    tel_no, 
    mob_no, 
    website, 
    isSeller, 
    password,
    username
  } = req.body;
  db(`INSERT INTO users (firstname, lastname, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website, isSeller, password, username) VALUES ("${firstname}", "${lastname}", "${email}, "${address1}", "${postcode}", "${city}", "${location}", "${company_name}, "${company_no}", "${tel_no}","${mob_no}", "${website}", "${isSeller}", "${password}", "$)`)
  .then((results) => {
    res.send({msg: "Your data was inputted correctly!"})
  })
  .catch(err => res.status(500).send(err))

});




// DELETE a user from the DB
router.delete("/:id", function(req, res, next) {
  
  const { id } = req.params;

  db(`DELETE FROM users WHERE id = ${id}`)
  .then(results => {
    res.send({msg: "Your data was deleted correctly!"})
  })
  .catch(err => res.status(500).send(err))

})







module.exports = router;
