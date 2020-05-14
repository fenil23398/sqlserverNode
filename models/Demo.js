var sql = require('mssql');

var request = new sql.Request(); 
var Demo = {
    getAllExpenses : function(){
        return  request.query('select * from trackExpenses')
    }
}

module.exports = Demo;