const mysql = require('mysql');
let connection;

if (process.env.burger) {
	connection = mysql.createConnection(process.env.burger)
} 
else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
        user: "root",
        password: "7knightsoftheoven!",
        database: "burgers_db"
        
	})
}

connection.connect(function(err){
	if (err) {
		console.error("Could not connect. Error: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;