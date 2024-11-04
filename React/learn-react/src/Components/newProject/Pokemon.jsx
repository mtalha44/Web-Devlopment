import { useEffect, useState } from "react"
import { PokeComp } from "./PokeComp";

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

    //search functionality
    const [ searchData , setSearch ] = useState("");

    const allsearchedData = Array.isArray(pokeData) ? pokeData.filter(curPoke => 
        curPoke.name.toLowerCase().includes(searchData.toLowerCase())
    ) : [];
      

    //handling loading state
    if(loadData){
        return <li>Loading...</li>
    }
    //handling error state
    if(error){
        return <h1>{error.message}</h1>
    }
    return (
        <>
        <section className="flex flex-col gap-[2rem] ">
            <section className="flex flex-col justify-between justify-center items-center ">
                <header> <h1 className="text-4xl m-[1rem]"> Lets Catch Pokemon Card </h1> </header>
                <input type="search" name="" id="" placeholder="Search Your Favourite Pokemon" onChange={(e) => setSearch(e.target.value)} value={searchData} className=" w-[16rem] rounded-lg h-[2.3rem] pl-[12px] border border-gray-500 focus:border-black focus:outline-none"/>
            </section>
            <section className="container bg-teal-600 m-auto py-[2rem] rounded-lg">
                <ul className="flex flex-row flex-wrap justify-around gap-[2rem]">
                    {
                        allsearchedData.map((curData)=>{

                            return <PokeComp key={curData.id} PokeData={curData} />;
                            
                        })
                    }
                </ul>
            </section>
            </section>
        </>

    )

}
