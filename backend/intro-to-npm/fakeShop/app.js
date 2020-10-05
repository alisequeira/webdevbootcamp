/*
	Create a new directory named "myShop" (in this case a named "app")
	Add a file named "listProducts.js"
	Install the "faker" package
	Read the faker doc and figure out how it work
	Use faker to print out 10 random product names and prices
	Run your file with node.
*/

const faker = require('faker');

for(var i = 0 ; i < 10 ; i++){
	console.log(`product ${i + 1}: name: ${faker.commerce.productName()} | price: ${faker.commerce.price()}$`);
};
