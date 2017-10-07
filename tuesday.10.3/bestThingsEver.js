// # Best Things Ever

// ## File

// * [`best_things_ever.txt`](Unsolved/best_things_ever.txt)

// ## Instructions

// * Create a Node application that reads the `best_things_ever.txt` file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

// * Your final output should look something like this:

//   ```
//   lazy boy recliner
//     massage
//     meditation
//     hot shower
//     cheese fondue
//     hot coffee with cashew milk
//     kitten falling asleep on my lap
//   ```

// ### Hints

// * If you are struggling to figure out how to loop your way through the text, look into the `.split()` method. This could make your life a whole lot easier.

var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf-8", function(error, data) {
	if (error) {
		return console.log(error);
	}

	var output = data.split(",");
	
	for (var i = 0; i < output.length; i++) {
		console.log(output[i]);
	}
});