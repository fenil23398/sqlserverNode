var express = require('express');
var router = express.Router();
var Demo = require("../models/Demo");

router.get('/',function(req,res,next){
    Demo.getAllExpenses().then(rows =>{
        console.log("Success router",rows);
        res.json(rows)
    })
    .catch(err =>{
        console.log("Error In Fetching Expenses Router")
    })
})

router.post('/',function(req,res){
    Demo.addExpenses(req.body)
    .then(rows => {
        console.log("Successfully added",rows);
        res.json(rows);
    })
    .catch(err=>{
        console.log("Errror While Adding Data",err)
    })
})

module.exports = router;