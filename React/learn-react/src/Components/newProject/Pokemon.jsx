import { useEffect, useState } from "react"
import { PokeComp } from "./PokeComp";
// import "./Poke.css"

export const Pokemon = ()  =>{

    const [ pokeData , setApiData ] = useState(null);
    const [ loadData , setLoad ] = useState(true);
    const [ error , setError ] = useState(null);

    const apiKey = 'dce503f5-f80d-47ff-baa9-e0e33737a361';
    const apiUrl = 'https://api.pokemontcg.io/v2/cards'; // Replace with the actual API endpoint

    const FetchPokemon = async () => {
        
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

            const pokeData = await response.json();

            const ALLpokeData = await pokeData.data.map((curData) => {
                return curData;
            });
            
            setApiData(ALLpokeData);
            setLoad(false);

        }
        catch(error){

            console.error('There was a problem with the fetch operation:', error);
            setError(error);
        }
}
useEffect(()=>{
    
          FetchPokemon();      
},[])

    if(loadData){
        return <li>Loading...</li>
    }
    if(error){
        return <h1>{error.message}</h1>
    }
    return (
        <>
            <section className="container bg-teal-600 m-auto">
                <ul className="flex flex-row flex-wrap justify-around gap-[2rem]">
                    {
                        pokeData.map((curData)=>{

                            return <PokeComp key={curData.id} PokeData={curData} />;
                            
                        })
                    }
                </ul>
            </section>
        </>

    )

}
