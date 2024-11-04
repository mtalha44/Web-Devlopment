import { useEffect, useState } from "react"

export const AsyncFetchPoke = ()  =>{

    const [ pokeData , setApiData ] = useState(null);
    const [ loadData , setLoad ] = useState(true);
    const [ error , setError ] = useState(null)
    const apiKey = 'dce503f5-f80d-47ff-baa9-e0e33737a361';
    const apiUrl = 'https://api.pokemontcg.io/v2/cards'; // Replace with the actual API endpoint

    const FetchkrData = async () => {
        
        try{

           const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${apiKey}`, // Or use a different key name if required
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await  response.json();
            const firstCard = data.data[0]; // Assuming the data is in `data.data` array
            console.log(firstCard);
            setApiData(firstCard);
            setLoad(false);
        }
        catch(error){
            console.error('There was a problem with the fetch operation:', error);
            setApiData(false);
            setError(error);
            console.log(error.message)
        }
}
useEffect(()=>{
    
          FetchkrData();      
},[])

    if(loadData){
        return <li>Loading...</li>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    return (
          <div className="container effect-container ">
            <section className="w-[40vh] bg-slate-200 ">
            <div className="w-[100%] h-[70%] bg-white">
            
                <img src={pokeData.images.small} alt="" />

            </div>
            <div className="list-section h-[30%] text-[15px] bg-white flex flex-row flex-wrap justify-between p-[5px]">
                 
                 <p className=""> <span className="bg-black rounded p-[1px] text-white">  Name  </span> { pokeData.name } </p> 
       
                 <p className=""> <span>  Level : </span> {pokeData.level}</p>
       
                 <p className=""> <span>  Power  : </span> {pokeData.types}</p>
       
                 <p className=""> <span>  HP : </span> {pokeData.hp}</p>

            </div>
            </section>
          </div>
    )

}
