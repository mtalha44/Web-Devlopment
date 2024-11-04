import { useEffect, useState } from "react"

export const NotFetch = ()  =>{
const [ data , setData ] = useState([])

// Given way is not the right way
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then(
//         (data) => setData(data)
//     )
//     .catch((err) => console.log(err))

//Right way to fetch api

useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then(
            (data) => setData(data)
        )
        .catch((err) => console.log(err))
     },[])

    return (
          <div className="container effect-container">
            <ul>
                {
                    data.map((curData) => {
                        return <li key={curData.id}>{curData.title}</li>
                    })
                }
            </ul>
          </div>
    )

}