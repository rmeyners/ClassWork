function character(name, profession, gender, age, strength, HitPoints, avoidance, IsAlive, Attack, LevelUp) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.HitPoints = HitPoints;
  this.avoidance = avoidance;
  this.PrintStats = function () {
  		for (var i in this) {
  			if ('function' != typeof this[i]) {
  				console.log(i + ': ' + this[i]);
  			}
  		}
  	};
  this.IsAlive = function() {
  	if(this.HitPoints > 0) {
		console.log(this.name + " Says: I'm Alive!!!");
		return true;
	} else {
		console.log(this.name + " Says: I'm Dead!!!");
		return false;
	}
  };
  this.Attack = function(fight) {
  	fight.Attacked(this.strength);
  };
  this.Attacked = function(strength) {
  	var amount = strength - this.avoidance;
  	this.HitPoints -= amount;
  };
  this.LevelUp = function() {

  }
};

var Rick = new character("Rick Sanchez", "Scientist", "M", 70, 5, 15);
var Morty = new character("Morty", "Highschool Student", "M", 12, 3, 13);

Rick.PrintStats();
Morty.PrintStats();

console.log("______________________________________");

Rick.IsAlive();
Morty.IsAlive();

console.log("______________________________________");
Rick.Attack();