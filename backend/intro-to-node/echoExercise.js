/*
	Using command line, create a file "echo.js"
	inside the file, write a function named echo that takes 2 arguments: a string and a number
	it should print out the string, number number of times.
	
	echo("Echo!!!", 10) should print "Echo!!!" 10 times
	echo("Tater tots", 3) should print "Tater tost" 3 times
	
	Add the above 2 examples to the end of your file 
	Lastly run te contents of "echo.js" using node
*/

function echo (string, number){
    for(var i = 0; i < number; i++){
        console.log(string);
    }
}

echo("Echo!!!", 10);
echo("Tater tots", 3);