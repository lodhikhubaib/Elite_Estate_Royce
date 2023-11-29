var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});

/*var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lodhi123"
});*/

conn.connect(function(err){
    if(err)
        throw err;
    console.log("Connection Successful...");
});