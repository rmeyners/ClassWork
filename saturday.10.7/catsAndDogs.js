var dog = {
	raining: true,
	noise: "woof",
	makeNoise: function() {
		if(this.raining === true) {
			console.log(this.noise);
		} else {
			console.log("no dog noises");
		}
	}
};

var cat = {
	raining: false,
	noise: "meow",
	makeNoise: function() {
		if(this.raining === true) {
			console.log(this.noise);
		} else {
			console.log("no cat noises");
		}
	}
};

dog.makeNoise();
cat.raining = true;
cat.makeNoise();

var massHysteria = function(dog, cat) {
	if (dog.raining === true && cat.raining === true) {
		console.log("it's raining cats and dogs!!")
	}
};

massHysteria(dog, cat);

//_____________________________________________________________________
// version two i.e. Advanced JavaScript

console.log("_______________Version 2____________________")

function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("it's raining cats and dogs!!");
  }
};

massHysteria(dogs, cats);