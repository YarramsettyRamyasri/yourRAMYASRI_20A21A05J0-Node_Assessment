const{createConnection}=require('mysql');
var mysql=require('mysql');
var con=mysql.createConnection({
    Host:"localhost",
    User:"root",
    Password:"",
    Database:"mydb"
});
con.connect(function(err){
    if(err) throw err;
    var sql="create table student(name VARCHAR(255),department VARCHAR(100),salary DECIMAL(10,2))";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("Table Created");

    });
    });