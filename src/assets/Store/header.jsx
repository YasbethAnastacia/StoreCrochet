import { categorias } from "./data";

export const Header = () => {
    
    return (

        <header>
                    
            {/*<div className="grid grid-cols-[35%_65%]"> */}
            {/*<div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-4"> */}
            <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[320px_1fr] xl:gap-8">
                <div className="">
                    <div className="flex items-center gap-3">
                        <h2 className="  text-5xl " style={{ fontFamily: "Bona Nova SC, serif" }}>TIENDA</h2> 
                        <div className="w-20 overflow-hidden object-cover ">
                            <img className="w-full" src="./Catalogo/Iconos/corazon.png" alt="" />
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">Hecho a mano con amor, especialmente para ti.</p>
                </div>
                
                <nav className=" text-sm flex justify-end items-end  ">
                    <div className="bg-[var(--color-partes)] rounded-lg">
                        {/*<ul className=" flex  items-end gap-2  bg-blue-500 "> */}
                        <ul className=" flex gap-y-2 flex-wrap items-center justify-center xl:flex-row xl:items-end gap-3  ">
                                    
                            {categorias.map((categoria) => {
                                const Icono = categoria.icono;

                                return(
                                    <li className="flex gap-2 group shadow-[0_4px_20px_var(--color-sombra)] rounded-lg py-3 px-3 categoria-hover  " key={categoria.nombre}>
                                        <Icono  size={18} strokeWidth={1.5} className="text-[var(--second-color)] group-hover:text-white"/>
                                        <span>{categoria.nombre}</span>
                                    </li>
                                        )})}        
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        
    )
}