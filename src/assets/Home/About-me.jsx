export const AboutMe = () =>{
    return (

            <div className="relative w-full h-[250px] md:h-[450px] lg:h-[700px] bg-red-500 border border-red-500  ">
                <div className="flex flex-col justify-center items-start absolute inset-0  whitespace-pre-line gap-6 pl-17">
                    <h1 className="text-6xl " style={{ fontFamily: "Bona Nova SC, serif" }}>
                        BIENVENIDOS A <br />
                        <span className="text-[var(--second-color)]">CROCHET BY ANASTACIA</span> <br />
                        
                    </h1>
                    <p>
                        {`Hecho a mano con amor. Diseño único 
                        Para tu hogar y estilo de vida.`}
                    </p>

                    <div className="bg-[var(--second-color)] px-3 py-1 rounded-2xl text-[var(--color-white)]">
                    <button>Explora la tienda</button>
                    </div>

                </div>
                <img className="h-full object-cover w-full" src="/AboutMe/Portada.png" alt="" />
            </div>

    )
}