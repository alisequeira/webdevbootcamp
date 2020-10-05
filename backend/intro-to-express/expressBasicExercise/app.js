/*
	EXPRESS ROUTING ASSIGNMENT
	
		1.Create a brand new Express app from scratch 
		2.Create a package.json using 'npm init' and add express as a dependency 
		3.In your main app.js file, add 3 differents route:
		
			visiting "/" should print "hi there, welcome to my assignment!"
			
			-------------------------------------------------------------------
			
			visiting "/speak/pig" should print "the pig says 'oink'"
			visiting "/speak/cow" should print "the cow says 'moo'"
			visiting "/speak/dog" should print "the dog says 'woof'"
			
			--------------------------------------------------------------------
			
			visiting "/repeat/hello/3" should print "hello hello hello"
			visiting "/repeat/hello/5" should print "hello hello hello hello hello"
			visiting "repeat/hello/2" should print "hello hello"
			
			
			If a user visit any other route, print:
				"Sorry, page not found...What are you doing with your life?"
			
*/

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hey there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
    const selection = req.params.animal;
        switch(selection){
            case "pig": res.send("oink oink!!");
                break;
            case "cow": res.send("moo moo!!");
                break;
            case "dog": res.send("woof woof!!");
                break;
            default: res.send("sorry, animal not found...what are you doing with your life?");
        }
});

app.get("/repeat/hello/:number", function(req,res){
    const selection = req.params.number;
        switch(selection){
            case "5": res.send("hello hello hello hello hello");
                break;
            case "3": res.send("hello hello hello");
                break;
            case "2": res.send("hello hello");
                break;
            default: res.send("sorry, not valid number... what are you doing with your life?");
        }
});

app.get("*", function(req, res){
    res.send("sorry, page not found...what are you doing with your life?")
});



app.listen(3000, process.env.IP, function(){
    console.log("server listen in port 3000");
});
