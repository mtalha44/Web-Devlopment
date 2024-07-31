// async function hello(){
//     console.log("hello");
// }


// function app()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//         resolve(200);
//         },2000)
//     })
// }
// async function weatherData()
// {
//     await app(); //1st call
//     await app(); //2nt call

// }

// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 console.log("Data:",data);
//                 resolve(200);
//         },2000);
//     })     
// }
// async function printData()
// {
//     await getData(34);
//     await getData(44);
// }

function getData(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                console.log("Data:",data);
                resolve(200);
        },2000);
    })     
}
//IIFE immediately Invoked Function Expression
( async ()=>{
     await getData(34);
     await getData(78);
})();

