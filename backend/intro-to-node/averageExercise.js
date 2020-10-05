/*
	Create a file, "grader.js"
	
	In the file define a new function named "average"
	It should take a single parameter: an array of test scores(all numbers)
	It should return the average score in the array, rounded to the nearest whole numbers
	
	var scores = [90,98,89,100,100,86,94]; should return 94
	var scores2 = [40,65,77,82,80,54,73,63,95,49] should return 68
*/

function average (arr){
	var av = arr.reduce((acumulator, current) => {
		return acumulator + current;
	},0) / arr.length;
	
	return Math.round(av);
}

var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80,54,73,63,95,49];

console.log(average(scores));
console.log(average(scores2));