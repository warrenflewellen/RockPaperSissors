/* FUNCTION THAT GENERATES RANDOM WORD FROM LIST */

function getComputerChoice() {
    var wordList = [
        "Rock",
        "Paper",
        "Sissors"
        ]
        let randomList = wordList[Math.floor(Math.random() * wordList.length)]
        console.log(randomList)

};

getComputerChoice();

/* FUNCTION THAT PLAYS ONE ROUND OF ROCK PAPER SISSORS */
let playerSelection = prompt("Enter Rock, Paper, or Sissors");

function oneRound() {

}