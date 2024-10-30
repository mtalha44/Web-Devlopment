const todokey = "todo";

// export const getlocalStorage = () => {
//     const storedData = localStorage.getItem(todokey);
//     if (!storedData) {
//         return []; // Return an empty array if there's no data
//     }
//     return JSON.parse(storedData);
// };
export const settodolocalStorage = (task) =>{
    return localStorage.setItem(todokey,JSON.stringify(task));
}


// useEffect(()=>{
//     const task = JSON.parse(localStorage.getItem(todokey))
    
// })