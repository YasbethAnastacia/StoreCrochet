import {
    Star,
    ShoppingCart,
    Heart,
    Grip,
    TextAlignJustify,
} from "lucide-react";

export const Menu = () => {

    return(
        <>
        {/*productos*/}
        <section className="bg-[var(--color-partes)] shadow-[0_4px_20px_var(--color-sombra)] rounded-xl">

            <div className="flex flex-col justify-center items-center  gap-3 lg:flex-row lg:justify-between lg:items-center py-4 px-4 border-b border-gray-200">{/*productos-header*/}

                <p className="text-sm text-gray-600">
                    Mostrando xx Productos
                </p>

                <div className="flex items-center gap-3">

                    <select className="px-4 py-2 rounded-lg bg-[#F7F1EC] text-sm text-gray-600 border border-gray-200 outline-none">
                        <option>Ordenar por: Más populares</option>
                        <option>Más populares</option>
                    </select>

                    <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-[var(--second-color)] text-[var(--second-color)] cursor-pointer hover:bg-[var(--second-color)] hover:text-white transition">
                        <Grip size={18} strokeWidth={1.5} />
                    </div>

                    <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-[var(--second-color)] text-[var(--second-color)] cursor-pointer hover:bg-[var(--second-color)] hover:text-white transition">
                        <TextAlignJustify size={18} strokeWidth={1.5} />
                    </div>

                </div>

            </div>{/*productos-header*/}

            {/*<div className="bg-red-500 grid grid-cols-[25%_25%_25%_25%] pb-6 pt-5 gap-y-6 h-[500px] overflow-y-auto [scrollbar-gutter:stable] justify-items-center">*/}
            <div className=" grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 py-5 px-5 gap-6 h-[500px] overflow-y-auto [scrollbar-gutter:stable] ">{/*productos*/}

                {/*<div className="bg-white w-[220px] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition-all duration-300 self-start">*/}
                <div className="bg-white w-full max-w-[220px] rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition-all duration-300 self-start">

                    <div className="relative w-full bg-red-500 aspect-square overflow-hidden rounded-t-2xl">

                        <div className="flex items-center justify-center  absolute h-8 w-8 bg-white rounded-full top-3 right-3 shadow-sm">
                            <Heart size={15} strokeWidth={2.5} color="var(--second-color)" />
                        </div>

                        <img className="w-full h-full object-cover" src="/Catalogo/Ropa/sueter.png" alt="" />

                    </div>

                    <div className="flex flex-col items-start p-3">

                        <p className="font-semibold text-lg">
                            Titulo
                        </p>

                        <p className="text-[var(--second-color)] font-medium">
                            $250
                        </p>

                        <div className="flex py-2">

                            <Star size={12} fill="#E8A87C" color="#E8A87C" />
                            <Star size={12} fill="#E8A87C" color="#E8A87C" />
                            <Star size={12} fill="#E8A87C" color="#E8A87C" />
                            <Star size={12} fill="#E8A87C" color="#E8A87C" />
                            <Star size={12} color="#D8D8D8" />

                        </div>

                        <button className="flex items-center w-full gap-2 text-[var(--second-color)] border border-[var(--second-color)] justify-center rounded-lg text-sm py-2 hover:bg-[var(--second-color)] hover:text-white transition">

                            <ShoppingCart size={16} strokeWidth={1.5} />
                            <span>Agregar al carrito</span>

                        </button>

                    </div>

                </div>










            
            
            
            
            
            
            
            
            
            
            </div>

        </section>

        </>
    )
}