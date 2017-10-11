// # **Instructions**

// * In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

// * Your "Programmer" constructor should be able to take in the following information...

//   * The programmer's name
//   * Their position/job title
//   * How old they are
//   * Favorite programming language

// * Now create a method for the constructor that would print all of the information contained within an object to the console.

// * Finally, create a "Programmer" object and call the method to print its contents



function Programmer(name, jobTitle, age, favoriteLanguage, programmerInfo) {
	this.name = name;
	this.jobTitle = jobTitle;
	this.age = age;
	this.favoriteLanguage = favoriteLanguage;
	this.programmerInfo = function () {
  		for (var i in this) {
  			if ('function' != typeof this[i]) {
  				console.log(i + ': ' + this[i]);
  			}
  		}
  	}
};

var Robert = new Programmer("Robert", "SEO Manager", 29, "JavaScript");

Robert.programmerInfo();