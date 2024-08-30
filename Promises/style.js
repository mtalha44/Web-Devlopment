 // let promise = new Promise( (resolve,reject)=>{
//     console.log("hello");
    

// } ) 
// function getData(data)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// //            console.log("data",data);
// //          resolve("sucess");
//             reject(console.error("Failed"));
//         },5000);
//     })
// }
 
// function getData(){
//     return new Promise((resolve,reject)=>{
//         console.log("its promise");
//         //resolve("sucess");
//         reject(console.error("error"));
// })
// }
// let promise = getData();
// promise.then((res)=>{
//     console.log("Granted Successfully",res)
// })

// promise.catch((err)=>{
//     console.log("Sysytem error",err);
// })

// function getData(data)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:",data);
//             reject("error");
//         },5000);
//     })
// }

// let result = getData();
// result.then((res)=>{
//         console.log("Data transfer Complete",res);
// });
// result.catch((err)=>{
//         console.log("Data trasfer failed",err);
// });

// function asyncFunc(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Some data");
//             resolve("success");
//         },5000);
//     })
// }

// function asyncFunc1(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Some data");
//             resolve("success");
//         },5000);
//     })
// }
// console.log("fetching data 1");
// asyncFunc().then((res)=>{    
//     console.log("fetching data 2");
// asyncFunc1().then((res)=>{
// });
// });

// })
function getData(data,nextData)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",data);
            if(nextData){
                nextData();
            }
            resolve("success");
        },2000)
    })    
}
// getData(5).then((res)=>{
//     console.log(res);
//     getData(9).then((res)=>{
//         console.log(res);
        
//     })
// })

console.log("geting data 1...")
getData(7)
    .then((res)=>{
         console.log("geting data 2...")
        return getData(1);
})
    .then((res)=>{
        console.log("geting data 3...")
        return getData(9);
})

// getData(7).then((res)=>{
//         return getData(1);
// }).then((res)=>{
//         console.log(res);
// })