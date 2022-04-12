const secretWords = ["hello" , "jack" , "mamad" , "ali" , "akbar"];

const keys = document.querySelector("#letters");
let img = document.querySelector("#image img");
let gameoverMSG = document.querySelector("#gameover p");
console.log(keys);
let clicked = [];
let randomItem = "";
let result = "";
let mistakes = 0;

function selectRandomWords(){
    randomItem = secretWords[Math.floor(Math.random() * secretWords.length)];
    keys.addEventListener("click" , buttonHandler);
    console.log(randomItem);
    window.addEventListener("keydown" , keyHandler)
}
function setUnderScor(){
    let splitedWords = randomItem.split("");
    let mappedWord = splitedWords.map(item => clicked.indexOf(item) >= 0 ? item : "_" )
    result = mappedWord.join("");
    let dude = document.querySelector("#clue p").innerText = result;
    console.log(mappedWord);
}
function checkIfWin(){
    if(randomItem === result){
        gameoverMSG.style.display = "block";
        gameoverMSG.innerText = `You WIN with just ${mistakes} mistakes !!`
        img.src = `assets/winner.png`
    }
}
function checkifLost(){
    img.src = `assets/hangman${mistakes}.png`
    if(mistakes == 6){
        gameoverMSG.style.display = "block";
        gameoverMSG.innerText = `You lost and the Random Word is ' ${randomItem} '`
    }
}
function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if(randomItem.indexOf(letter) >= 0){
        setUnderScor();
        checkIfWin();
    }else if(randomItem.indexOf(letter < 0)){
        mistakes++;
        checkifLost()
    }
}
function keyHandler(event){
    letterHandler(event.key);
}
function buttonHandler(event){
    letterHandler(event.target.id);
}

selectRandomWords();
setUnderScor();