
export const PokeComp = ({PokeData}) =>{
    
    return (
        <>
            <section className=" ">
                <section className="w-[40vh] h-[90vh] shadow-lg shadow-zinc-800 rounded-b-full font-mono bg-green-100 m-[5px] pb-[] flex flex-col justify-between overflow-hidden">
                    <div>
                        <img src={PokeData.images.small} alt="" className="rounded-none"/>
                    </div>
                    <header>
                        <h1 className="m-auto text-center font-medium bg-green-900 text-white rounded-full p-[5px] w-[50%] text-[15px]">
                            {PokeData.name}
                        </h1>
                    </header>
                    <div className="bg-emerald-200 border-blue-700 pt-[30px] pb-[15px] rounded-t-full hover:bg-green-300 hover:rounded-none transition-all ease-linear duration-[100ms]">
                        <ul className="flex flex-col justify-around justify-center items-center font-medium text-black">
                            <li> <span> Rarity: </span>{PokeData.rarity || 'Unknown'}</li>
                            <li> <span> Type: </span>{PokeData.types}</li>
                            <li> <span> Stage: </span>{PokeData.subtypes}</li>
                            <li> <span> HP: </span>{PokeData.hp}</li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}