import { useEffect, useState } from "react"

export const FetchPoke = ()  =>{

    const [ pokeData , setApiData ] = useState(null);
    const [ loadData , setLoad ] = useState(true);
    const [ error , setError ] = useState(null)

    const FetchkrData = () => {
        
    const apiKey = 'dce503f5-f80d-47ff-baa9-e0e33737a361';
    const apiUrl = 'https://api.pokemontcg.io/v2/cards'; // Replace with the actual API endpoint
    
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`, // Or use a different key name if required
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const firstCard = data.data[0]; // Assuming the data is in `data.data` array
        console.log(firstCard);
        setApiData(firstCard);
        setLoad(false);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setApiData(false);
        setError(error);
        console.log(error.message)
    });

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
          <div className="container effect-container">
                <img src={pokeData.images.small} alt="" />
            <ul> <li> <h1> Name: { pokeData.name } </h1>  </li> </ul>
                <p>Level: {pokeData.level}</p>
                <p>Type: {pokeData.types}</p>
                <p>Power: {pokeData.hp}</p>
          </div>
    )

}
