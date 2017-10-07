// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

// var numbers = [1,5,22,8,7,3,9,2,6,0,15,]

// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

// var nodeArg = process.argv;

// var numArray = [];

// for (var i = 2; i < nodeArg.length; i++) {
// 	numArray.push(parse(parseFloat(nodeArg[i]));
// }

// console.log(numArray);

// console.log(numArray.sort());

// console.log(numArray.sort(compareFunction));

// function compareFunction(a, b) {
// 	return (a - b);
// }


// ___________________________________________________________________
// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ============================================================================================

// Grab all of the command line arguments from Node.
// console.log(process.argv);
var nodeArg = process.argv;

// Create an array that will hold all of the numbers (excluding the path and node command)
var numArray = [];

// Here we create a for-loop that starts with **2** so we skip the path and node command from the command line
// We will use this for loop to build an array of numbers.
for (var i = 2; i < nodeArg.length; i++) {

  // We then "push" (add) each of these numbers to our numArray.
  // We need to convert these numbers to "floats" (numbers with decimals) otherwise node will treat our input as strings
  numArray.push(parseFloat(nodeArg[i]));

}

// Then we print the original numbers
console.log(numArray);

console.log(numArray.sort());

// Then we print the sorted numbers by making use of a JavaScript sort function for numbers.
console.log(numArray.sort(compareFunction));

// -------------------------------------------------------

// This function is needed so the JavaScript sort function knows to sort in numeric order.
// Default is to sort by alphabetic order).
// This part wasn't obvious. But a quick Google + Stack search led us to a few different posts that all said the same.
// http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// In case you are wondering, there is no "default" way to sort numerically :-(
function compareFunction(a, b) {
  return (a - b);
}