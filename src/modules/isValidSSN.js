//   that the date of the number is valid (e.g. "000000-0000" does return as true)
export default function(value) {
	let ssn = value
		.replace(/\D/g, "") // keep only digits, mean delete carret `-` if exist
		.split("")
		.reverse() // split & reverse order for Luhn Algorithm
		.slice(0, 10); // keep only 10 digits (i.e. 1977 becomes 77)
	// here ssn formate becomes reversed -> XXXXDDMMYY

	// verify we got 10 digits, otherwise it is invalid
	if (ssn.length !== 10) {
		return false;
	}

	var sum = ssn
		// convert to number
		.map(function(n) {
			return Number(n);
		})
		// perform arithmetic and return sum
		.reduce(function(previous, current, index) {
			// multiply every other number with two
			if (index % 2) current *= 2;
			// if larger than 10 get sum of individual digits (also n-9)
			if (current > 9) current -= 9;
			// sum it up
			return previous + current;
		});

	// sum must be divisible by 10
	return 0 === sum % 10;
}
