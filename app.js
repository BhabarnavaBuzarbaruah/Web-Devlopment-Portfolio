let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//Function for computer game
const genComputerChoice=()=>{
    //game choices:- rock,paper,scissors
    const options=["rock","paper","scissors"];
    //Note:-Math.random() method randomly generate number from 0 to 1 to get the number from 0 to 2 multiply the method with 2.This help in randomly accesing the indexes of options array.
    //Math.floor() method helps to remove decimal values of number.
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame=()=>{
    //Change the text of msg para
    msg.innerText="Game Was Draw Play Again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin === true){
        userScore++;
        userScorePara.innerText=userScore;
        //Change the text of msg para
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        //Change the text of msg para
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
//Function to play game
const playGame=(userChoice)=>{
    //Generate computerChoice
    const compChoice=genComputerChoice();
    if(userChoice === compChoice){
         //Draw Game
         drawGame();
    }else{
       let userWin=true;
       if(userChoice === 'rock'){
           //if comp choice is scissor,paper
           userWin=compChoice === 'paper' ? false : true;
       }else if(userChoice === 'paper'){
           //if comp choice is rock,scissors
           userWin=compChoice === 'scissors' ? false : true;
       }else{
            //if comp choice is rock,paper
           userWin=compChoice === 'rock' ? false : true;
       }
       showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
