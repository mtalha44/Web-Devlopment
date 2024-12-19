// import { useEffect, useState } from "react"


// export const ApiRouter = () => {
//     const[ apiData , setApiData ] = useState([])

//     const url = 'https://jsonplaceholder.typicode.com/posts'
//     const fetchCard = async () => {
//     try{
//             const response = await fetch( url , {
//               method : 'GET'
//         });
//         if(!response.ok){
//             throw new Error('Network Error');
//         }
//         const data = await response.json();
//         setApiData(data);
//         console.log(data)
//      }
//      catch(error){
//          console.log(error);
//      }
        
// }
//     useEffect(() => {
//         fetchCard();
//     },[])

//     return (
//         <>
//             <div>
//              {
//                 apiData.length > 0 ?  (

//                     apiData.map( ( data , index ) => (
//                          <h1 key={index}>{data.title}</h1>
//                     ))
//                 ) : <p>Lodaing.....</p>
//             }
//             </div>          
            
//         </>
//     )
// }



export const ApiRouter = async () => {
    try{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch( url , {
            method : 'GET'
        });
        if(!response.ok){
            throw new Error('Network Error');
        }
        const data = await response.json();
        return data;
    }
     catch(error){
         return [];
     }
        
}
