const express = require("express");
const app = express();

//define rout

// "/" => "hi there!

	app.get("/", function(req, res) {
		res.send("hi there!");
	});
// "/bye" => "GoodBye!"

	app.get("/bye", function(req, res){
		res.send("Goodbye");
	});

// "/dog" => "woof woof"

	app.get("/dog", function(req, res){
		res.send("woof woof");
	});

//path params

	app.get("/r/:subredditName", function(req, res){
		console.log(req.params);
		res.send("you are here for path params");
	});

	app.get("/r/:subredditName/comments/:id/:title/", function(req,res){
		res.send("welcome to another page accessed with path params");
	});

	app.get("*", function(req,res){
		res.send("YOU ARE DUMB!")
	});

//tell express to listen for request (start server)

app.listen(3000, process.env.IP, () => console.log('server has started!!'));