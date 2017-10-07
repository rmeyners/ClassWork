// # Parameter Check

// ## File

// * *None*

// ## Instructions

// * Create a command line node application that takes in two parameters and outputs whether they are equal or not.

// ### Hints

// * Start by simply logging the value of each argument to console. Then use your usual JavaScript approach (recall that Node is still just JavaScript).

var a = process.argv[2]
var b = process.argv[4]

if (a == b) {
	console.log(true);
}
else {
	console.log(false);
}


console.log(process.argv[2] + process.argv[4])

