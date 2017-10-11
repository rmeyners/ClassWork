// # **Instructions**

// * Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// * Start out by creating a constructor function called "Player" with the following properties and methods...

//   * `name`: Property which contains the player's name
//   * `position`: Property which holds the player's position
//   * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
//   * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
//   * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
//   * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
//   * `printStats`: Method which prints all of the player's properties to the screen

// * Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. It should take as user input the name, position, offense, and defense of each player.

// * Once all of the players have been created, print their stats.

// * Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

//   * Run 10 times. Each time the function runs:
//     * Two random numbers between 1 and 50 are rolled and compared against the starter's offensive and defensive stats
//       * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
//       * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
//     * After the score has been changed, prompt the user to allow them to choose to substitute any of the players within the starters array with any of the players within the subs array.
//   * After the game has finished (been run  10 times):
//     * If the score is positive, run `goodGame` for all of the players currently within the starters array. 
//     * If the score is negative, run `badGame` for all of the players currently within the starters array. 
//     * If the score is equal to zero, do nothing with the starters.
//     * Gives the user a message about if they won, and the status of their starters.
//     * After printing the results, prompts the player if they would like to play again. 
//       * Runs `playGame` from the start once more if they do.
//       * Ends the program if they don't.

// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.

var inquirer = require("inquirer");

function player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  this.goodGame = function () {
    return (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
    if (this.goodGame === 'heads') {
      this.offense +1,
      this.defense +1
    }
  };
  this.badGame = function () {
    return (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
    if (this.badGame === 'tails') {
      this.offense -1,
      this.defense -1
    }
  };
};

player.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nOffense: " + this.offense + "\nDefense: " + this.defense);
  console.log("---------------");
};

var count = 0;

var playerArray = [];

var newPlayer = function() {
  if (count < 1) {
    inquirer.prompt([
      {
        name: "name",
        message: "what is your name?"
      }, {
        name: "position",
        message: "what is your current position?"
      }, {
        name: "offense",
        message: "what is your current offense"
      }, {
        name: "defense",
        message: "what is your current defense"
      }, 
    ]).then(function(answers) {
      var newPerson = new player(
          answers.name,
          answers.position,
          answers.offense,
          answers.defense);
      playerArray.push(newPerson);

      count++;

      newPlayer();
    });
  } 
  else {
    for (var x = 0; x < playerArray.length; x++) {
      playerArray[x].printInfo();
    }
  }
};

newPlayer();





