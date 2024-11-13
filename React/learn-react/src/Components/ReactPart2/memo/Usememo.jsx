import {useMemo , useState} from 'react' ;


const ChildComp = () =>{
    const sum =  () => { 
        let i = 0 ;
        for(i =  0 ; i < 5 ; i++)
        {
             i = i + 1 ;
        }
        return i;
    }
    const countRender = useMemo( () => sum() , [] )
    return(
        <div>
            <h1> Child Component render : {countRender} times. </h1>
        </div>
    )
}


export const UseMemoComp = () =>{
    let [count,setCount]  = useState(0);
    
    const Inc = () =>{
        
         setCount( (count) => count + 1 )

    }
    return(
            <div className='flex flex-col justify-center items-center gap-[2rem] h-lvh text-xl'>
                
            <div>
                <h1>Count is {count}</h1>
                <button onClick={Inc} className='bg-black text-white p-[8px]'>Increment</button>        
            </div>
            <ChildComp/>
            
            </div>
    );
}
