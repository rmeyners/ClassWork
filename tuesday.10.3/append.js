// var fs = required("fs");

// var textFile = process.argv[2];

// fs.appendFile(textFile, "Append Stuff\n", function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Content Added!");
// 	}

// });

// As always, we grab the fs package to handle read/write
var fs = require("fs");

// We then store the textfile filename given to us from the command line
var textFile = process.argv[2];

// We then append the contents "Hello Kitty" into the file
// If the file didn't exist then it gets created on the fly.
fs.appendFile(textFile, "Append Stuff\n", function(err) {

  // If an error was experienced we say it.
  if (err) {
    console.log(err);
  } else {
    console.log("Content Added!");
  }

});