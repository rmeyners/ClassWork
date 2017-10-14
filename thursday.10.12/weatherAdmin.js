var fs = require("fs");
var userSearch = require("./userSearch");

// this function will read the .txt file if the admin input is entered
var weatherAdmin = function() {
  this.getData = function() {
    fs.readFile("log.txt", "utf8", function(error, data) {
      if(error) {
        return;
      } else {
      console.log(data);
      }
    });
  };
// thhis function will write to the .txt file if the user input is entered
  this.newUser = function(name, location) {
    var newUser = new userSearch(name, location);
    var logTxt =
      "\nName: " + newUser.name + " Location: " + newUser.location + " Date: " + newUser.date;

    fs.appendFile("log.txt", logTxt);

    newUser.getWeather();
  };
};
// admin constructor - required in cli.js
module.exports = weatherAdmin;

