const URL = "https://cat-fact.herokuapp.com/facts";
let printData = document.querySelector("p");
let btn = document.querySelector("#btn");
const getFacts = async ()=>{
    
    console.log("Getting data");
    let response = await fetch(URL);
    console.log(response);
    
    let data = await response.json();
    console.log(data[0].text);
    
    printData.innerText = data[0].text ;
    
    
}
btn.addEventListener("click",getFacts);

// function getFacts(){
//     const URL = "https://cat-fact.herokuapp.com/facts";
//     try{
//         fetch(URL)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data);
//             printData.innerText = data[0].text;
//         })
        
//     }
//     catch(error){
//         console.error(error);
//     }
// }
// btn.addEventListener("click",getFacts);

// function getData(){

//         fetch(URL)
//         .then((response)=>{
//                 return response.json();
//         }) 
//         .then((data)=>{
//             console.log(data);
//             printData.innerText = data[0].text ;
//         }) 

// }

// btn.addEventListener("click",getData);
