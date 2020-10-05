const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const friends = ['Tony', 'Justin', 'Miranda', 'ricky', 'bobby'];

	app.get("/", (req,res) => {
		res.render("home");
	});

	app.get("/friends", (req, res) => {
		
		res.render("friends", {friends});
	});

	app.post("/addfriend", (req,res) => {
		let newFriend = req.body.newfriend;
		friends.push(newFriend);
		res.redirect("/friends");
	});

app.listen(3000, process.env.IP, ()=> console.log("server running happy code!"));