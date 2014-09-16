// letterCapitalize

var letterCapitalize = function(x) {
	// Split string into separate arrays for each word
	newArray = x.split(" ");
	var newestArray = [];

	// Print it
	console.log(newArray);

	for (i = 0; i < newArray.length; i++) {
		// Split the smaller array into individual letters
		anotherArray = newArray[i].split("");

		// Capitalize each anotherArray[0] (first letter)
		anotherArray[0] = anotherArray[0].toUpperCase();

		// Join each letter back together into anotherArray
		anotherArray = console.log(anotherArray.join(""));
	};

return newestArray;

};

console.log(letterCapitalize("hello world you are nice"));


// wordCount

var wordCount = function(x) {

	// Split string into separate arrays for each word
	newArray = x.split(" ");

	// Print it
	console.log(newArray);

	// Count how many values are in the array
	return newArray.length;

};

console.log(wordCount("hello my name is Samantha"));


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
	};
	
};


