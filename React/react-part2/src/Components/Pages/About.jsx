// import { use } from "react"

import { useLoaderData } from "react-router-dom"

// import { BioContext } from "./Home";
export const About = () =>{

    // const {name}  = use(BioContext);
        const data = useLoaderData();
        if (!data || data.error) {
            return <p>Error fetching data. Please try again later.</p>
        }
        
    return(
        <>
        <h1>Titles</h1>
        <div className="section1" style={{overflow:"scroll"}} >
        {
            data.map((data) => (
                <li key={data.id}>{data.title}</li>
            ))
        }
        </div>
        </>
    ) 
}
