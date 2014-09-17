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


// wordCount

var wordCount = function(x) {

	// Split string into separate arrays for each word
	newArray = x.split(" ");

	// Count how many values are in the array
	return newArray.length;

};

console.log("Number of words you entered: " + wordCount("hello my name is Samantha"));


// Bonus: PrimeTime

var primeTime = function(x) {

	if ((x % 2 === 0) && (x != 2))
		//if number is even and number is not 2, number is not prime
		return false;

	if (x === 1 || x === 2)
		// if number is 1 or 2, number IS prime
		return true;

	for (i = 2; i < (2^16); i++) {

		if (x % i === 0)
			// number is not prime
			return false;
		else 
			return true;
	}
	
};

console.log("primeTime(1): " + primeTime(1));
console.log("primeTime(2): " + primeTime(2));
console.log("primeTime(3): " + primeTime(3));


