import { useState } from "react";
import {  filtros } from "./data";

import {
    SlidersHorizontal,
} from "lucide-react";


export const Filtros = () => {
    const [categoriaActiva, setCategoriaActiva] = useState(filtros[0]);
    return(

        <aside className="  bg-red-500 pr-8">
            <div className="flex  flex-col  bg-[var(--color-partes)]  shadow-[0_4px_20px_var(--color-sombra)] rounded-lg py-4 px-3 gap-2 text-lg ">
                <div className="flex ">
                    <p className=" font-semibold">Flitros</p>
                    <SlidersHorizontal className="ml-auto" size={20} />
                </div>

                <div className=" flex flex-col gap-5 ">
                    <div className="flex flex-col  gap-2 " >{/*categorias*/}
                        <p className="font-semibold ">Categorias</p>
                        <div className="flex flex-col gap-2 text-sm">
                            {filtros.map((filtro) => (
                                <label
                                    className="flex items-center gap-3 cursor-pointer" key={filtro}>
                                    <input type="radio" name="categoria" className="hidden" checked={categoriaActiva === filtro} onChange={() => setCategoriaActiva(filtro)} />
                                    <div className={` flex justify-center items-center h-[15px] w-[15px] border-2 border-[var(--second-color)] rounded-full
                                    ${categoriaActiva === filtro && "shadow-[0_0_5px_#d47f5b] bg-[var(--second-color)]"}`}>
                                    {categoriaActiva === filtro && (
                                        <div className=" h-[6px] w-[6px] rounded-full bg-white"/>)}
                                    </div>
                                    {filtro}

                                </label>
                            ))}
                        </div>
                    </div>{/*categorias*/}


                    <div className="">
                        <p className=" font-semibold ">Precio</p>

                        <input type="range" min="0" max="500" className="w-full accent-orange-400" />

                        <div className="flex justify-between text-xs ">
                            <span>$0</span>
                            <span>$500</span>
                        </div>
                    </div>


                    <div className="flex flex-col">{/*colores*/}
                            <p className="font-semibold ">Colores</p>
                            <div className="flex">
                                <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                            </div>
                    </div>{/*colores*/}

                    <button>APLICAR FILTROS</button>
                </div>
            </div>
                    
        </aside>

    )
}