// node package for reading and writing files
var fs = require("fs");

var fileContents = "Inception, Die Hard";

// this line will create the file
fs.writeFile("movies.txt", fileContents, function(error) {
	if (error) {
		return console.log(error);
	}

	console.log("movies.txt was updated");
});