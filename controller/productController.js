const db = require("../models")

module.exports = {
findAll: function(req, res) {
    console.log("looking for the products")
    db.Product.find()
    .then(data => {
        console.log(data)
        res.json(data)
    }) .catch (err => {
        console.log(err)
        res.json(err)
    })


  },
  findByCategory: function(req, res) {
    console.log("looking for the products" + req.params.category)
    db.Product.find({ category: req.params.category })
    .then(data => {
        console.log(data)
        res.json(data)
    }) .catch (err => {
        console.log(err)
        res.json(err)
    })
  }
}