let userScore =  0;
let compScore = 0;
let gameMsg = document.getElementById("msg");
let againMsg = document.querySelector(".msgContainer1");
let userScoreBoard = document.getElementById("userScore");
let compScoreBoard = document.getElementById("computerScore");
againMsg.classList.add("hide");
const genCompChoice = () =>{
      let opt = ["rock","paper","scissors"];
      const ranInd = Math.floor(Math.random() * 3);
      return opt[ranInd];
}
const draw =()=>{
      gameMsg.innerText = "Draw";
}
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice)
        {
            draw();
        }
        else{
        if(   ((userChoice  === "rock")&&(compChoice=== "paper")) || ((userChoice  === "paper")&&(compChoice=== "scissors")) || ((userChoice  === "scissors")&&(compChoice=== "rock") )  )
        {
            compScore++;
            gameMsg.innerText = `You loss! ${(compChoice)} beat ${(userChoice)}`  ;
            againMsg.classList.remove("hide");
            compScoreBoard.innerText = compScore;
        }
        else{ 
            userScore++;
            gameMsg.innerText = `You Win! ${(userChoice)} beat ${(compChoice)}`  ;
            userScoreBoard.innerText = userScore;
            againMsg.classList.remove("hide");
            }
    }
    
}
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});