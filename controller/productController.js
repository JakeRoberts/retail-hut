const db = require("../models")

module.exports = {
findAll: function(req, res) {
    console.log("This is a new console log &&&&&")
    db.Product.find()
    .then(data => {
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
  },

  findByProductId: function (req, res) {
    console.log("looking for one product")
    console.log("FIND ONE PRODUCT _____", req.params)
    db.Product.find({ _id: req.params.id }) 
    .then(data => {
        res.json(data)
    }) .catch (err => {
        res.json(err)
    })
}
}

