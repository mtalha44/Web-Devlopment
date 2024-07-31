let boxes = document.querySelectorAll(".box");
let resetBtn   = document.querySelector("#reset-btn");
let newGamebtn  = document.querySelector("#new-btn");
let msgSection = document.querySelector(".win-section");
let msgPara = document.querySelector("p");

let turnX = "true";

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () =>{
    turnX = "true";
    enabledGame();
    msgSection.classList.add("hide"); 
};
const enabledGame =() =>{
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
};
boxes.forEach((box) => {
      box.addEventListener("click" , ()=>{
        if((box.innerText == "X" ) || (box.innerText == "O"))
         {

         }
         else
         {
            if(turnX === "true")
                {
                    box.innerText = "X";
                    turnX =  "false";
                    
                }
            else{
                box.innerText= "O";
                turnX = "true";
    
            }
         }
         checkWinner();
      });
});
const boxesDisable = () =>{
      for(let box of boxes)
        {
            box.disabled = true;
        }
}
const checkWinner = () =>{
 //   let num=0;
    for(let ptr of winpatterns)
        {
            let pos1 = boxes[ptr[0]].innerText;
            let pos2 = boxes[ptr[1]].innerText;
            let pos3 = boxes[ptr[2]].innerText; 
            if((pos1 != "" ) && (pos2 != "") && (pos3 != ""))
            {
            if( (pos1 == 'X' ) && (pos2 == 'X') && (pos3 == 'X'))
                {
                    console.log("Winner is player 1");
                    showWinner(pos1);
                    boxesDisable();
                }   
                else if( (pos1 == 'O' ) && (pos2 == 'O') && (pos3 == 'O'))
                {
                    console.log("Winner is player 2");
                    showWinner(pos1);
                    boxesDisable();
                    
                }
                
        }
    }
    // num=0;
    
    // for(let box of boxes)
    //     {
    //         if(box.innerText !== "")
    //             {
    //                 num++;
    //             }
    //     }
    //     if(num===9)
    //         {
    //             console.log("Draw");
    //             showWinner("Draw");
    //             boxesDisable();
    //         }

};

const showWinner= (Winner) =>{

    if (Winner === "Draw") {
        msgPara.textContent = "It's a Draw!";
      } else {
        msgPara.textContent = `Congratulations! The winner is ${Winner}`;
      }
      msgSection.classList.remove("hide");
    
}

// resetBtn.addEventListener("click",()=>{
//     msgSection.classList.add("hide");    
//     for(let box of boxes)
//         {
//             box.enabled = true;
//             box.innerText = "";
//         }
//     turnX = "true";
// })


resetBtn.addEventListener("click",resetGame);
newGamebtn.addEventListener("click",resetGame);