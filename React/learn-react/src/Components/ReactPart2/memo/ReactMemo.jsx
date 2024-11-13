import {useRef, useState} from 'react' ;
import { memo } from 'react';

export const ReactMemo = memo (() =>{
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
)

const ChildComp = memo(() =>{

    const render = useRef(0);
    return(
        <div>
            <h1> Child Component render :{render.current++} times. </h1>
        </div>
    )
})