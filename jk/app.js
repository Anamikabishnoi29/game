let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["Rock","Paper","Scissor"];
    const randIndex =Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = (userChoice,compChoice) => {
    msg.innerText = "Game was Draw . Play again !";
    msg.style.backgroundColor ="black";

}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `You Win!! . Your ${userChoice} beats  computer ${compChoice}`;
        msg.style.backgroundColor ="green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!! . Computer ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor ="red";

    }
};


const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
 //generate computer choice 
 const compChoice = genCompChoice();
 console.log("computer choice =",genCompChoice);

 if (userChoice === compChoice){
    //Draw game
    drawGame();
 } else{
    let userWin = true;
    if(userChoice === "Rock"){
    userWin = compChoice === "Paper"? false : true;
 } else if(userChoice ==="Paper"){
    userWin = compChoice === "Scissor"?false : true;
 }else{
    userWin = compChoice === "Rock"? false : true;
 }
  showWinner(userWin , userChoice , compChoice);
 }

};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    })
});