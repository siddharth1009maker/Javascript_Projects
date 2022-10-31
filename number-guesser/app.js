let min = 1 , max = 10  , winningNum = getWinningNum(min , max) , guessesLeft = 3 ;

const game = document.getElementById("game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown",function(e){
    if(e.target.className == "play-again"){
        window.location.reload();
    }
});

guessBtn.addEventListener("click",function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess<min ||  guess>max){
        setMessage(`Please enter a number between ${min} and ${max}`,"red");
    }

    if(guess === winningNum){

        gameOver(true , `${winningNum} is correct! , YOU WIN!`);

    }else{
        guessesLeft-=1;
        if(guessesLeft === 0){

            gameOver(false , `Game Over , you lost . The correct number was ${winningNum}`);

        }
        else{
            guessInput.style.borderColor = "red";

            guessInput.value = "";
            setMessage(`${guess} is not correct , ${guessesLeft} guesses left` , "red");
        }
    }
});

function gameOver(won,msg){
    let color = won === true ? "green" : "red";
    guessInput.disabled = true;
    guessInput.style.borderColor = color ;
    setMessage(msg,color);

    guessBtn.value = "Play Again";

    guessBtn.classList.add("play-again");
}

function setMessage(msg , color){
    message.style.color = color;
    // message.appendChild(document.createTextNode(msg));
    message.textContent = msg;
}

function getWinningNum(min , max){
    return Math.floor(Math.random()*(max-min+1));
}