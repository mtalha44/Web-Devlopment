//Toggle on/ off button
import { useState } from "react";

const Project = () =>{
    const [isOn,isCheack] = useState(false)


    const Change = () => {   
        isCheack (isOn => ! isOn);
    }



const rightstyle = {
        backgroundColor : "blue",
        transform: `translate(${45}px, ${0}px)`,
        color: "white",
        transition: "transform 0.5s ease-in "
}
const leftstyle = {
        backgroundColor : "red",
        transform: `translate(${-45}px, ${0}px)`,
        color: "black",
        transition: "transform 0.5s ease-in "
}

    
    return (
        <>
            <div className="bg-current h-[4rem] p-[0.4rem] w-[10rem] rounded-lg">
                <button 
                 onClick={Change}
                 className="h-[3.2rem] w-[3.2rem] rounded-full"
                 style={ isOn ? leftstyle : rightstyle }>
                    
                 { isOn ?  "Off" : "On" }
                
                </button>
            </div>
        </>
    )

}

export default Project;