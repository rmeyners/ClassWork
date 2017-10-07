function DigitalPal() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function() {
		if (this.hungry === true) {
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full.");
		}
	};
	this.sleep = function() {
		if (this.sleepy === true) {
			console.log("Zzzzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else {
			console.log("No way! I'm not tired.")
		}
	};
	this.play = function () {
		if (this.bored === true) {
			console.log("Yay! Let's play!")
		} else {
			console.log("Not right now. Later?")
		}
	};
	this.increaseAge = function() {
		this.age = this.age +1
		console.log("Happy Birthday to me! I am " + this.age + " old!");
	};
};

var dog = new DigitalPal();

dog.outside = true;
dog.bark = function() {
	console.log("Woof! Woof!");
};
dog.goOutside = function() {
	if (dog.outside === false) {
		console.log("Yay! I love the Outdoors!");
		dog.outside = true;
		dog.bark();
	} else {
		console.log("We're already outside though...");
	}
};
dog.goInside = function() {
	if (dog.outside === true) {
		console.log("Do we have to? Fine...");
		dog.outside = false;
	} else {
		console.log("I'm already inside...");
	}
};

// dog.feed();

var cat = new DigitalPal();

cat.houseCondition = 100;
cat.meow = function() {
	console.log("Meow! Meow!");
};
cat.destroyFurniture = function() {
	cat.houseCondition = cat.houseCondition -10
	console.log("MUAHAHAHAHAHAHAHAHA! TAKE THAT FURNITURE!")
	cat.bored = false;
	cat.sleepy = true;
} if (cat.houseCondition === 0) {
	return
};
cat.buyNewFurniture = function() {
	cat.houseCondition = cat.houseCondition +50
	console.log("Are you sure about that?");
};






