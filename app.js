const options = document.querySelectorAll(".choice");
let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const msg = document.querySelector(".msg");

const genrateCompChoice = () => {
    let arr = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return arr[randomIdx];
}

const gameDraw = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game Draw";
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = `${userScore}`;
        msg.style.backgroundColor = "green";
        msg.innerText = "You Win !";
    } else {
        compScore++;
        compScorePara.innerText = `${compScore}`;
        msg.style.backgroundColor = "red";
        msg.innerText = "You Lose.";
    }
}
const playGame = (userChoice) => {
    // genrate computer choice
    let compChoice = genrateCompChoice();
    if(userChoice === compChoice){
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper scissors
            userWin =  compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock scissors
            userWin = compChoice === "rock" ? true : false;
        } else {
            // rock paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}

options.forEach((choice) => {
    choice.addEventListener("click", () => {
        // user choice
        const userChoice = choice.getAttribute("id");
        // play game
        playGame(userChoice);
    });
});