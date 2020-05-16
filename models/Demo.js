var sql = require('mssql');

var request = new sql.Request(); 
var Demo = {
    getAllExpenses : function(table){
        return  request.query('select * from '+table)
    },
    addExpenses : function(expenseObj){
        var userIdd = expenseObj.userId;
        var expensee = expenseObj.expense;
        var table = 'trackExpenses';
        // var obj = {
        //     "userId" : userId,
        //     "expense" : expense
        // };
        //console.log("Object Passed is ",obj)
        return request.query('insert into '+ table + '([userId],[expense]) values(' +userIdd+','+expensee+')')
        // let sql = `insert into trackExpenses(userId,expense) VALUES()`;
        // return request.query(sql,obj);
    },
    deleteExpenses : function(userId){
        return request.query('delete from [trackExpenses] where userId = '+userId);
    },

    //Type Of IN Join Query 


    // getExpensedById : function(userId){
    //     var tmpquery = 'select userId from userTable'
    //     return request.query('select * from trackExpenses where userId = ' +userId+ 'and userId in (' +tmpquery + ')');
    // }

    //Cross Join
    getExpensedById : function(userId){
        var tmpquery = 'select userId from userTable'
        return request.query('select trackExpenses.expense,userTable.username from trackExpenses Inner Join userTable on userTable.userId = trackExpenses.userId where trackExpenses.userId ='+userId);
    }

}

module.exports = Demo;