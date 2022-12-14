function getComputerChoice(randomItem) {
    var myArray = [
        "Rock",
        "Paper",
        "Sissors"
    ];
    
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

    console.log(getComputerChoice(randomItem));
}

