var express = require("express"),
	request = require("request"),
	app = express();
	

app.get("/", function(req, res) {
	console.log("any");
	res.status(200).send("lala")
	
});

app.listen(8080, function() {
	console.log("port 80");
});