document.addEventListener('DOMContentLoaded', () => {
    
const hintButton = document.querySelector(".hint_btn");
const checkButton = document.querySelector(".check_button");
const inputCheck = document.querySelectorAll(".input_check_code");
let hintFirstInputs = document.querySelector(".hint_1_input");
let hintSecondInputs = document.querySelector(".hint_2_input");
let hintThirdInputs = document.querySelector(".hint_3_input");
let hintFourthInputs = document.querySelector(".hint-4-input");
let hintFifthInputs = document.querySelector(".hint-5-input");
const inputsRandom = document.querySelectorAll(".hint_rnd_inputs");

const rnd1 = Math.floor(Math.random() * 100) + 1 ;
const rnd2 = Math.floor(Math.random() * 100) + 1 ;
const rnd3 = Math.floor(Math.random() * 100) + 1 ;
const arr = [ rnd1 , rnd2 , rnd3 ];

function hintBox()
{
    let m = Math.floor( Math.random()* 2) ;
    hintFirstInputs.value = arr[m];

    let n = Math.floor( Math.random()* 3 ) ;
    hintSecondInputs.value = arr[n];

    hintThirdInputs.value = arr[2];

    let x =  Math.floor( Math.random()*2 );
    hintFourthInputs.value = arr[x];

    hintFifthInputs.value = arr[2] ;

}
function hintShow()
{
    hintBox();
    inputsRandom.forEach(fillInputFields);
}
function fillInputFields(inputs)
{
        inputs.value = Math.floor(Math.random() * 100) + 1 ;
}
var temp =0;
let allFilled = 0; // Assume all fields are filled initially
function emptyFields() {

    inputCheck.forEach((input) => {
        if (input.value === "") {
            allFilled = 1;
        }
    });
    if (allFilled == 1) {
        alert("Fill the empty fields");
        console.log("Empty");
    }
    else{
        console.log("All fields are filled");
    }
    inputCheck.forEach(myfunc);
    winMsg();
}

function winMsg()
{
    if(temp == 3)
        {
            alert("You win");
            
            const newNode = document.createElement("h1");
            const textNode = document.createTextNode("You win");
            newNode.appendChild(textNode);
            
            const div = document.querySelector(".winner_message");
            div.insertBefore(newNode, div.children[0]);
        }
    else{
            alert("you lose,Try Again");
        }
}
function myfunc(inputs,index)
{
    if( arr[index] == inputs.value)
    {
        console.log("Equal");
        temp++;
    }
    else{
        console.log("not equal");
    }
}
checkButton.addEventListener("click", emptyFields); // Pass the function reference
hintButton.addEventListener("click",hintShow);

});