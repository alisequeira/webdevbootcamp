const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/fallinlovewith/:pet", (req, res) => {
	const pet = req.params.pet;
	
	res.render("love.ejs", {pet})
});

app.get("/posts", (req,res) => {
	var posts = [
		{title: "post 1", author: "Jor"},
		{title: "my adorable pet cirilo!", author: "Ali"},
		{title: "stop embarrassing me on internet", author: "Cirilo"}
	];
	
	res.render("posts.ejs", {posts});
	
});

app.listen(3000, process.env.IP, ()=>console.log("server running"));