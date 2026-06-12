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
        <section className="bg-[var(--color-partes)]  shadow-[0_4px_20px_var(--color-sombra)]">
            <div className="flex  justify-between py-2 px-2 ">{/*productos-header*/}
                <p>Mostrando xx Productos</p>
                <div className=" flex gap-3">
                    <select className="px-5 rounded-lg">
                        <option >Ordenar por: Más populares</option>
                        <option >Más populares</option>
                    </select>
                    <div className="h-[30px] w-[30px]  flex items-center justify-center rounded-lg border-2 border-[var(--second-color)]"> 
                        <Grip size={20} strokeWidth={1.5} />
                    </div>
                    <div className="h-[30px] w-[30px]  flex items-center justify-center rounded-lg border-2 border-[var(--second-color)]"> 
                        <TextAlignJustify size={20} strokeWidth={1.5} />
                    </div>

                </div>
            </div>{/*productos-header*/}


            <div className="grid grid-cols-[25%_25%_25%_25%]  pb-5  gap-y-4 h-[500px] overflow-y-auto [scrollbar-gutter:stable] justify-items-center">{/*productos*/} 

                <div className="bg-white w-[220px] rounded-2xl shadow-md  self-start"> {/** h-fit flex-none */}
                    <div className="relative w-full h-[180px] overflow-hidden">
                        <div className="flex items-center justify-center absolute h-6 w-6 bg-white rounded-full top-3 right-3"> 
                            <Heart size={14} strokeWidth={3} color="var(--second-color)" />
                        </div>
                        <img className="w-full rounded-t-2xl" src="/Catalogo/Ropa/sueter.png" alt="" />
                    </div>
                    <div className="flex flex-col items-start p-2 ">
                        <p className="font-bold">Titulo</p>
                        <p className="text-[var(--second-color)] text-sm">$250</p>
                        <div className="flex flex-row py-2">
                            <Star size={12} strokeWidth={1.5} color="#151514" />
                            <Star size={12} strokeWidth={1.5} color="#151514" />
                            <Star size={12} strokeWidth={1.5} color="#151514" />
                            <Star size={12} strokeWidth={1.5} color="#151514" />
                            <Star size={12} strokeWidth={1.5} color="#151514" />
                        </div>
                        <div className="flex flex-row items-center w-full gap-2 text-[var(--second-color)] border-2 border-[var(--second-color)] justify-center rounded-lg text-sm py-1">
                            <ShoppingCart size={17} strokeWidth={1.5}  />
                            <p >Agregar al carrito</p>
                        </div>
                    </div>
                </div>
                        
            </div>
        </section>
        
        </>
    )
}