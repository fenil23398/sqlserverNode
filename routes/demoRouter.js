var express = require('express');
var router = express.Router();
var Demo = require("../models/Demo");

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        Demo.getExpensedById(req.params.id)
        .then(rows => {
            console.log("SuccessFully Fetched By ID ",rows);
            res.json(rows);
        })
        .catch(err => {
            console.log("Error While fetching Data ",err);
        })
    }
    else {
        var tableName = 'trackExpenses';
        Demo.getAllExpenses(tableName).then(rows => {
            console.log("Success router", rows);
            res.json(rows)
        })
            .catch(err => {
                console.log("Error In Fetching Expenses Router")
            })
    }
})

router.post('/', function (req, res) {
    Demo.addExpenses(req.body)
        .then(rows => {
            console.log("Successfully added", rows);
            res.json(rows);
        })
        .catch(err => {
            console.log("Errror While Adding Data", err)
        })
})

router.delete('/:id', function (req, res) {
    Demo.deleteExpenses(req.params.id)
        .then(rows => {
            console.log("Deleted Successfully ", rows);
            res.json(rows);
        })
        .catch(err => {
            console.log("Error In Deleting Data ", err)
        })
})

module.exports = router;