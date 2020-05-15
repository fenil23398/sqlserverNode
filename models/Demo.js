var sql = require('mssql');

var request = new sql.Request(); 
var Demo = {
    getAllExpenses : function(){
        return  request.query('select * from trackExpenses')
    },
    addExpenses : function(expenseObj){
        var userIdd = expenseObj.userId;
        var expensee = expenseObj.expense;
        // var obj = {
        //     "userId" : userId,
        //     "expense" : expense
        // };
        //console.log("Object Passed is ",obj)
        return request.query('insert into [trackExpenses] ([userId],[expense]) values(' +userIdd+','+expensee+')')
        // let sql = `insert into trackExpenses(userId,expense) VALUES()`;
        // return request.query(sql,obj);
    }
}

module.exports = Demo;