var bandNames = require("./bands.js")

console.log("_______________________");
console.log("Band List");
console.log("A Punk Band is " + bandNames.punk);
console.log("A Rap Group is " + bandNames.rap);
console.log("A Classic Band is " + bandNames.classic);
console.log("A Rock Band is " + bandNames.rock);

console.log("_______________________");
console.log("Band List");
for (var key in bandNames) {
  console.log("A " + key + " band is " + bandNames[key] + ".");
};

// console.log("_______________________");
// console.log("Band Item");
// for (var key in bandsNames) {
// 	if (input === key) {
// 		console.log(bandNames[key])
// 	}
// };