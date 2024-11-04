import "./Poke.css"
export const PokeComp = ({PokeData}) =>{
    
    return (
        <>
            <section className=" ">
                <section className="w-[40vh] h-[90vh] shadow-lg shadow-zinc-800 rounded-b-full font-mono bg-green-100 m-[5px] pb-[15px] flex flex-col justify-between">
                    <div>
                        <img src={PokeData.images.small} alt="" className="rounded-none"/>
                    </div>
                    <header>
                        <h1 className="m-auto text-center font-medium bg-green-900 text-white border-double border-4 border-white-600 p-[5px] w-[50%] text-[15px]">{PokeData.name}</h1>
                    </header>
                    <div>
                        <ul className="flex flex-col justify-around justify-center items-center text-black">
                            <li> <span className="font-medium"> Rarity: </span>{PokeData.rarity || 'Unknown'}</li>
                            <li> <span className="font-medium"> Type: </span>{PokeData.types}</li>
                            {/* <li> <span className="font-medium"> Form: </span>{PokeData.evolvesFrom}</li> */}
                            <li> <span className="font-medium"> Stage: </span>{PokeData.subtypes}</li>

                            <li> <span className="font-medium"> HP: </span>{PokeData.hp}</li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}