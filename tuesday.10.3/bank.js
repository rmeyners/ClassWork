// # BankJs

// ## File

// * [`bank.txt`](Unsolved/bank.txt)

// ## Instructions

// * Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.

// * The transactions possible are:

//   * `total` - this should tally up all of the money in the bank balance and display it for the user.

//   * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

//   * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

//   * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

// * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.

// ### Hints

// * Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).

// ### Bonuses

// * If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

// Load the fs package to read and write
var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (action) {
  case "total":
    total();
    break;

  case "deposit":
    deposit();
    total();
    break;

  case "withdraw":
    withdraw();
    break;

  case "lotto":
    lotto();
    break;
}

// If the "total" function is called...
function total() {

  // We will read the existing bank file
  fs.readFile("bank.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    // Break down all the numbers inside
    data = data.split(", ");
    var result = 0;

    // Loop through those numbers and add them together to get a sum.
    for (var i = 0; i < data.length; i++) {
      if (parseFloat(data[i])) {
        result += parseFloat(data[i]);
      }
    }

    // We will then print the final balance rounded to two decimal places.
    console.log("You have a total of " + result.toFixed(2));
  });
}

// If the "Deposit" function is called...
function deposit() {

  // We will add the value to the bank file.
  fs.appendFile("bank.txt", ", " + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was added (but we wont print the total).
  console.log("Deposited " + value + ".");
}

// If the "Withdraw" function is called
function withdraw() {

  // We will add a negative value to the bank file.
  fs.appendFile("bank.txt", ", -" + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was subtracted (but we wont print the total).
  console.log("Withdrew " + value + ".");
}


// If the "Lotto" function is called
function lotto() {

  // We will subtract 25 cents
  fs.appendFile("bank.txt", ", -.25", function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // Then grab a random number
  var chance = Math.floor((Math.random() * 10) + 1);
  // If the random number equals 1...
  if (chance === 1) {

    // We will then add $2 to the account.
    fs.appendFile("bank.txt", ", 2", function(err) {
      if (err) {
        return console.log(err);
      }
    });

    // And tell the user the amount was added.
    console.log("Congrats you won the lottery!");

  // Otherwise we will tell them they lost 25 cents.
  }
  else {
    console.log("Sorry. You just lost 25 cents.");
  }
}