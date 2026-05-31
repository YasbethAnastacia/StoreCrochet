const productos = [
    "/Informacion/flor-bolsa.png",
    "/Informacion/concha-bolsa.png",
]


export const Informacion = () =>{
    return(
        <section className="flex flex-col gap-8 min-h-screen w-full  pt-5  border border-green-500 ">
            <div className="h-[350px]  w-full grid grid-cols-[30%_40%_30%] ">
                <div className=" pr-5 py-8"> 
                    <img className=" w-full h-full object-cover rounded-r-3xl" src={productos[0]} alt="" />
                </div>


                <div className=" overflow-x-hidden"> 
                    <img className=" w-full h-full object-cover rounded-3xl" src={productos[0]} alt="" />
                </div>

                <div className=" pl-5 py-8"> 
                    <img className=" w-full h-full object-cover rounded-l-3xl" src={productos[0]} alt="" />
                </div>
            </div>



            <div className=" w-full pb-4 pt-2">
                <div className=" grid grid-cols-[1fr_1fr_1fr] items-top  ">{/**place-items-center */}
                    <div className="  flex flex-col items-center overflow-hidden border-r gap-4">
                        <img className=" h-[100px] w-[80px]  object-contain" src="/Informacion/trebol-icon.png" alt="" />
                        <h2>
                        HILO SOSTENIBLE</h2>
                        <p className="p-3 text-center">Elaborado con materiales de calidad y fibras cuidadosamente seleccionadas para ofrecer suavidad, durabilidad y un menor impacto ambiental.</p>
                    </div>

                    <div className="  flex flex-col items-center overflow-hidden gap-4">
                        <img className=" h-[100px] w-[80px]  object-contain" src="/Informacion/reloj-icon.png" alt="" />
                        <h2>
                        DISEÑO ATEMPORAL</h2>
                        <p className="p-3 text-center">Creaciones únicas con un estilo clásico y versátil que nunca pasa de moda, perfectas para acompañarte en cualquier ocasión.</p>
                        <div className="flex flex-cols gap-5">
                            <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                            <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                            <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                            <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="  flex flex-col items-center overflow-hidden border-l gap-4">
                        <img className=" h-[100px] w-[80px]  object-contain" src="/Informacion/mano-icon.png" alt="" />
                        <h2>
                        HECHO A MANO CON CUIDADO</h2>
                        <p className="p-3 text-center">Cada pieza es tejida artesanalmente con dedicación, atención al detalle y mucho cariño para garantizar un acabado especial.</p>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}