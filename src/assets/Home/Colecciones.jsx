const seccion = [
    {
        nombre: "AMIGURUMIS",
        description:"Tiernos y únicos. Compañeros perfectos hechos a mano con mucho amor.",
        imagen: "/Catalogo/Amigurumis/Osito.png",
    },
    {
        nombre: "HOGAR",
        description:"Piezas que llenan tu hogar de calidez, estilo y ese toque hecho a mano.",
        imagen: "/Catalogo/Hogar/manta-naranja.png",
    },
    {
        nombre: "ACCESORIOS",
        description:"Bolsas, aretes y más detalles que complementan tu estilo con originalidad.",
        imagen: "/Catalogo/Accesorios/bolsa-multicolor.png",
    },
    {
        nombre: "ROPA",
        description:"Diseños cómodos y atemporales para cada estación del año.",
        imagen: "/Catalogo/Ropa/sueter.png",
    },
]


import { Heart } from "lucide-react";

export const Colecciones = () =>{
    return  (
        <section>
            <div className="flex flex-col">
                <div className="">
                    <h2>NUESTRAS COLECCIONES: CARACTERÍSTICAS</h2>
                    
                </div>

                <div className="grid grid-cols-[25%_25%_25%_25%]  px-10 py-5">
                    
                        {seccion.map((categoria)=>(
                            <div className=" w-[350px]  overflow-hidden  flex flex-col items-center rounded-3xl shadow-[0_0_10px_#C2A4A3]  " key={categoria.nombre}>
                            <img className="w-full h-[280px]" src={categoria.imagen} alt="" />
                            <Heart className="fill-[var(--second-color)] text-[var(--second-color)]  w-6 h-6" />
                            <h3 className="font-semibold text-2xl" style={{ fontFamily: "Bona Nova SC, serif" }}>{categoria.nombre}</h3>
                            <p className="text-center">{categoria.description}</p>
                        </div>
                        ))}
                </div>

            </div>
        </section>
    )
}