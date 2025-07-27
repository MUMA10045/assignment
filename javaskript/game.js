const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const secretNumber = Math.floor(Math.random() * 10) + 1;


function guessGame() {
  rl.question("Guess a number between 1 and 10: ", function(answer) {
    const userGuess = Number(answer);

    if (userGuess === secretNumber) {
      console.log(" You have won!");
      rl.close(); 
    } else {
      console.log(" Wrong guess. Try again.");
      guessGame(); 
    }
  });
}


guessGame();