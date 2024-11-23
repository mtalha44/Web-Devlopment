//Finding Factorial:

// let number = prompt("Enter any number");
// let result = Number(number);
// if( typeof(result) == "number" ){
//     let result = fact(number);
//     console.log(result);
// }
// else{
//     alert("Wrong input");
//     console.log(typeof(number)) ;
// }
// function fact( number ){
//     if( number == 0 ){
//         return 1;
//     }
//     return( number * ( number - 1 ) );
// }

// 

//Getting and dislaying input:
function Print(){
    let task = document.getElementById("task").value;
    document.querySelector(".taskcontent").textContent = task;

}

//counting paragraph

 function Count(){
    var count = document.getElementsByName("para");
    console.log(count.length);
 }

//Form Validation
function formValid(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;    
    if( emailPattern.test(email) && passwordPattern.test(password) ){
        alert("Form Validated");
    }
    else{
        alert("Form not validated");    
    }
}


// Implementation of class
class Car{
      constructor( name ,  brand ){
          this.name = name;
          this.brand = brand;
      }
      show = () => {
            console.log(this.name);
            console.log(this.brand);
      }
      get(){
           this.name = prompt("Enter name");
           
      }
};

const c1 = new Car( "Audii" ,  "Luxury");
c1.show();

//Object

const car = {
    Brand :  "Audii",
    Price : 43000,
    Number : "34AB"
}
document.writeln( car.Brand + " " + car.Number +  " " + car.Price) ;


//Events

function FuncFocus(){
    document.getElementById("eventcheck").style.backgroundColor="aqua";
}
function MouseOver(){
    document.getElementById("mouseover").style.backgroundColor="blue";
}
function Keypress(){
    document.getElementById("subheading").style.backgroundColor="orange";
}
function DoubleClick(){
    document.getElementById("h4heading").style.backgroundColor="yellow";
}

// Exception handling

try{
    setInterval(() => {
        let today = new Date();
        let time = today.toLocaleTimeString(today);
        let timediv = document.querySelector(".trycatch");

        if(!timediv) throw new Error("Element with class .trycatch not found");
        timediv.textContent = time;
        console.log(timediv);
    }, 1000);

}
catch(error){
    console.error("An error occured :" , error.message);
}

