
const userChoice = document.querySelectorAll(".choice");
let pattern = [ "paper" , "scissors" , "rock" ]
let compScrore = 0;
let userScore = 0;

userChoice.forEach((choice) => {
    
    // choice.addEventListener("click", CheckWin(choice.id) );
    choice.addEventListener("click", () => CheckWin(choice.id) );
    
});

function CheckWin(winPattern) {
    let compSelect = pattern[ Math.floor( Math.random() * 3 )];
    let gameState = "";
    if( compSelect == winPattern ){
        gameState = "draw";
    }
    else if (  
        ( compSelect === "scissors" && winPattern === "paper" ) ||
        ( compSelect === "rock" && winPattern === "scissors" )  ||
        ( compSelect === "paper" && winPattern === "rock" )
    ){

        gameState = "You lose";
        compScrore++;
    }
    else{
        gameState = "You win";
        userScore++;
    }
    document.getElementById("msg").textContent = gameState;
    document.querySelector(".msgContainer1").classList.remove("hide");
    document.getElementById("computerScore").textContent = compScrore;
    document.getElementById("userScore").textContent = userScore;
}

