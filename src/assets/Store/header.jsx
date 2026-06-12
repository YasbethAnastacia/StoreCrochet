import { categorias } from "./data";

export const Header = () => {
    
    return (

        <header>
                    
                    
            <div className="grid grid-cols-[35%_65%]">
                <div className="pl-3 ">
                    <div className="flex gap-2">
                        <h2 className="  text-5xl " style={{ fontFamily: "Bona Nova SC, serif" }}>TIENDA</h2> 
                        <div className="w-20 overflow-hidden object-cover ">
                            <img className="w-full" src="./Catalogo/Iconos/corazon.png" alt="" />
                        </div>
                    </div>
                    <p className="text-sm">Hecho a mano con amor, especialmente para ti.</p>
                </div>
                <nav className=" text-sm flex justify-end items-end ">
                <div className="bg-[var(--color-partes)] rounded-lg">
                    <ul className=" flex items-end gap-2   ">
                                
                        {categorias.map((categoria) => {
                            const Icono = categoria.icono;

                            return(
                                <li className="flex gap-2 group shadow-[0_4px_20px_var(--color-sombra)] rounded-lg py-3 px-5 categoria-hover  " key={categoria.nombre}>
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