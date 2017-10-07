// # Command Line Arg

// ## File

// * *None*

// ## Instructions

// * Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

// ### Hints

// * `console.log(process.argv)` as a starting point if you are completely lost.

// ### Bonuses

// * Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.

var arg1 = process.argv[2]
var arg2 = process.argv[3]

if (arg1 === arg2) {
	console.log(true);
}
else {
	console.log(false);
}


// BONUS
if ((arg1 % 7) === 0 && (arg2 % 7) === 0) {
	console.log(true)
} else {
	console.log(false)
}