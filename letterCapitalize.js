// letterCapitalize

var letterCapitalize = function(x) {

	// Set x to val to protect x's original value
	val = x;

	// Declare an empty array (global)
	newVal = [];

	// Set val to be x, split up by spaces (put each word into a new array)
	val = val.split(" ");

	// For loop to go thru each new array and add on the newly transformed words
	for (var i = 0; i < val.length; i++) {
		newVal = newVal + val[i].substring(0,1).toUpperCase() + 
		val[i].substring(1, val[i].length) + " ";
	}  // End for loop

	x = newVal;   // Set x to be the newVal
	return x;     // return x

}

console.log(letterCapitalize("hello world you are nice"));

