import { useState } from "react";
import { filtros } from "./data";

import {
    SlidersHorizontal,
} from "lucide-react";

export const Filtros = () => {

    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

    const toggleCategoria = (categoria) => {
        setCategoriasSeleccionadas((prev) =>
            prev.includes(categoria)
                ? prev.filter((item) => item !== categoria)
                : [...prev, categoria]
        );
    };

    return(

        <aside className="w-full md:pr-4 lg:pr-8">

            <div className="flex flex-col bg-[var(--color-partes)] shadow-[0_4px_20px_var(--color-sombra)] rounded-xl py-6 px-5 gap-6">

                <div className="flex items-center">
                    <p className="font-semibold text-xl">Búsqueda avanzada</p>
                    <SlidersHorizontal className="ml-auto text-gray-500" size={18} />
                </div>

                <div className="flex flex-col gap-6">

                    {/* Categorias */}
                    <div className="flex flex-col gap-3 border-b border-gray-200 pb-6">

                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Categorías
                        </p>

                        <div className="flex flex-col gap-3 text-sm">

                            {filtros.map((filtro) => (

                                <label className="flex items-center gap-3 cursor-pointer" key={filtro}>

                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={categoriasSeleccionadas.includes(filtro)}
                                        onChange={() => toggleCategoria(filtro)}
                                    />

                                    <div className={`flex justify-center items-center h-4 w-4 border border-[var(--second-color)] rounded ${categoriasSeleccionadas.includes(filtro) && "bg-[var(--second-color)]"}`}>

                                        {categoriasSeleccionadas.includes(filtro) && (
                                            <div className="h-2 w-2 bg-white rounded-sm" />
                                        )}

                                    </div>

                                    <span>{filtro}</span>

                                </label>

                            ))}

                        </div>

                    </div>

                    {/* Precio */}
                    <div className="border-b border-gray-200 pb-6">

                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
                            Precio
                        </p>

                        <input type="range" min="0" max="500" className="w-full accent-[var(--second-color)]" />

                        <div className="flex justify-between text-sm mt-2">
                            <span>$0</span>
                            <span>$500</span>
                        </div>

                    </div>

                    {/* Colores */}
                    <div className="flex flex-col border-b border-gray-200 pb-6">

                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
                            Colores
                        </p>

                        <div className="flex flex-wrap gap-3">

                            <div className="h-6 w-6 rounded-full bg-[#F0B6A4] border border-white shadow-sm cursor-pointer" />

                            <div className="h-6 w-6 rounded-full bg-[#F4D06F] border border-white shadow-sm cursor-pointer" />

                            <div className="h-6 w-6 rounded-full bg-[#B8D8B8] border border-white shadow-sm cursor-pointer" />

                            <div className="h-6 w-6 rounded-full bg-[#D3C3E6] border border-white shadow-sm cursor-pointer" />

                            <div className="h-6 w-6 rounded-full bg-white border border-gray-300 shadow-sm cursor-pointer" />

                        </div>

                    </div>

                    {/* Disponibilidad */}
                    <div className="flex flex-col gap-3 border-b border-gray-200 pb-6">

                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Disponibilidad
                        </p>

                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input type="checkbox" />
                            <span>Solo disponibles</span>
                        </label>

                    </div>

                    {/* Promociones */}
                    <div className="flex flex-col gap-3 border-b border-gray-200 pb-6">

                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Promociones
                        </p>

                        <label className="flex items-center gap-3 cursor-pointer text-sm">
                            <input type="checkbox" />
                            <span>Mostrar ofertas</span>
                        </label>

                    </div>

                    <button className="w-full bg-[var(--second-color)] text-white text-sm font-medium rounded-lg py-3 transition hover:opacity-90">
                        APLICAR FILTROS
                    </button>

                </div>

            </div>

        </aside>

    )
}