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