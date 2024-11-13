import { useReducer } from "react"


export const UseReducerComp =  () =>{
    
    const reducer =  ( state , action ) =>{
        if( action.type == "Increament" ){
            return state + 1;
        } 
        else{
            return state - 1;
        }
    }
    
    const [ count , dipatch ] = useReducer( reducer , 0 );

    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={() =>  dipatch({ type : "Increament"})}>Increament</button>
            <br /><br />
            <button onClick={() =>  dipatch({ type : "Decreament"})}>Decreament</button>
        
        </>
    )
}

