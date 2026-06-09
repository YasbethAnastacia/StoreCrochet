import { useState } from "react";
import {
    House,
    ShoppingBag,
    Shirt,
    Star,
    SlidersHorizontal,
    ShoppingCart,
    Heart,
    Grip,
    TextAlignJustify,
    Handbag,
    Trash2,
    Gift,
    Van,
} from "lucide-react";




{/*{
        nombre: "AMIGURUMIS",
        icono:<House size={18} strokeWidth={1.5} color="#C59B82" />,
},

const categorias = [
    {
        nombre: "HOGAR",
        icono: <House {...iconProps} />,
    },
    {
        nombre: "ACCESORIOS",
        icono: <ShoppingBag {...iconProps} />,
    },
];
 

const CategoriaStyle = {
    size:18,
    strokeWidth:1.5,
    

} */}

const categorias = [
    {
        nombre: "AMIGURUMIS",
        icono:House,
    },
    {
        nombre:"HOGAR",
        icono:House,
    },
    {
        nombre: "ACCESORIOS",
        icono: ShoppingBag,
    },
    {
        nombre:"ROPA",
        icono:Shirt,
    },
    {
        nombre:"KITS",
        icono:Gift,
    },
    {
        nombre:"NOVEDADES",
        icono:Star,
    }
]

const filtros = [
    
    "Todos",
    "Amigurumis",
    "Hogar",
    "Accesorios",
    "Ropa",
    "Kits",
    "Novedades"
]


export const StoreHome = () =>{
    const [categoriaActiva, setCategoriaActiva] = useState(filtros[0]);
    return(
        <main className="px-5 py-3">
        {/*ROJO*/}
        <div className=" flex items-center gap-2 pl-5  py-2 text-sm">
            <House className="w-[13px] h-[14px]" />
            <p className="">Home &gt; shop </p>
        </div>
        <section className="grid grid-cols-[80%_20%] ">
            {/*70%*/}
            <section className="flex flex-col gap-5">

                <header>
                    
                    {/*superior*/}
                    <div className="grid grid-cols-[35%_65%]">
                        <div className="pl-3 ">
                            <h2 className="  text-5xl " style={{ fontFamily: "Bona Nova SC, serif" }}>TIENDA</h2> 
                            <p>Hecho a mano con amor, especialmente para ti.</p>
                        </div>
                        <nav className=" text-sm flex justify-end ">
                            <ul className=" flex items-end gap-5  ">

                                {categorias.map((categoria) => {
                                    const Icono = categoria.icono;

                                    return(
                                        <li className="flex gap-2 group 
                                        shadow-[0_0_20px_#C2A4A3] rounded-lg p-3 categoria-hover  " key={categoria.nombre}>
                                        <Icono  size={18} strokeWidth={1.5} className="text-[var(--second-color)] group-hover:text-white"/>
                                        <span>{categoria.nombre}</span>
                                        </li>
                                            )
                                })}

                                
                                
                                
                            </ul>
                        </nav>{/*superior*/}
                    </div>

                </header>










                <div className="grid grid-cols-[20%_80%]">


{                   /*filtros*/}
                    <aside className=" px-3">
                        <div className="flex  flex-col  shadow-[0_0_20px_#C2A4A3] rounded-lg py-4 px-3 gap-2 text-lg">
                            
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
                                                className="flex items-center gap-3 cursor-pointer"
                                                key={filtro}
                                                >

                                                <input
                                                    type="radio"
                                                    name="categoria"
                                                    className="hidden"
                                                    checked={categoriaActiva === filtro}
                                                    onChange={() => setCategoriaActiva(filtro)}
                                                />

                                                <div
                                                    className={`
                                                        flex justify-center items-center
                                                        h-[15px] w-[15px]
                                                        border-2
                                                        border-[var(--second-color)]
                                                        rounded-full
                                                        ${categoriaActiva === filtro && "shadow-[0_0_5px_#d47f5b] bg-[var(--second-color)]"}
                                                    `}
                                                >

                                                    {categoriaActiva === filtro && (
                                                    <div
                                                        className="
                                                        h-[6px] w-[6px]
                                                        rounded-full
                                                        bg-white
                                                        
                                                        
                                                        "
                                                    />
                                                    )}

                                                </div>

                                                {filtro}

                                                </label>
                                        ))}
                                    </div>
                                </div>{/*categorias*/}


                                <div className="">
                                    <p className=" font-semibold ">Precio</p>

                                    <input
                                        type="range"
                                        min="0"
                                        max="500"
                                        className="w-full accent-orange-400"
                                    />

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






                            {/*productos*/}
                            <section className="">
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


                                <div className="grid grid-cols-[25%_25%_25%_25%]  pb-5  gap-y-4 h-[550px] overflow-y-scroll">{/*productos*/} 

                                    
                                    <div className="bg-white w-[200px] rounded-2xl shadow-md  self-start"> {/** h-fit flex-none */}
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
                </div>


            </section>



















            {/*TU CARRITO */}
            <aside className="bg-red-200 pt-12 px-3">
                <div className="flex gap-2 items-center bg-blue-200 p-3">
                    <Handbag size={18} strokeWidth={1.5} color="var(--second-color)" />
                    <p className=""> Tu Carrito </p>
                </div>

                <div className=" flex flex-col bg-white h-85 gap-y-3 overflow-y-auto [scrollbar-gutter:stable]">


                    <div className="grid grid-cols-[40%_60%] bg-purple-500 ">
                        <div className="h-25  bg-green-200 pl-4 pr-2 py-2">
                            <img className="w-full h-full object-cover rounded-lg" src="/Catalogo/Ropa/sueter.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-1 p-2 justify-between">
                            <p>Titulo</p>
                            <p className="text-sm">$250</p>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-5 rounded-full bg-[#F5F0EA] px-2 w-fit text-sm">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <Trash2 size={20} strokeWidth={1.5} color="var(--second-color)" />
                            </div>
                        </div>
                    </div> 



                    <div className="grid grid-cols-[40%_60%_] bg-purple-500 ">
                        <div className="h-25  bg-green-200 pl-4 pr-2 py-2">
                            <img className="w-full h-full object-cover rounded-lg" src="/Catalogo/Ropa/sueter.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-1 p-2 justify-between">
                            <p>Titulo</p>
                            <p className="text-sm">$250</p>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-5 rounded-full bg-[#F5F0EA] px-2 w-fit text-sm">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <Trash2 size={20} strokeWidth={1.5} color="var(--second-color)" />
                            </div>
                        </div>
                    </div> 


                    
                    <div className="grid grid-cols-[40%_60%_] bg-purple-500 ">
                        <div className="h-25  bg-green-200 pl-4 pr-2 py-2">
                            <img className="w-full h-full object-cover rounded-lg" src="/Catalogo/Ropa/sueter.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-1 p-2 justify-between">
                            <p>Titulo</p>
                            <p className="text-sm">$250</p>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-5 rounded-full bg-[#F5F0EA] px-2 w-fit text-sm">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <Trash2 size={20} strokeWidth={1.5} color="var(--second-color)" />
                            </div>
                        </div>
                    </div> 

                    <div className="grid grid-cols-[40%_60%_] bg-purple-500 ">
                        <div className="h-25  bg-green-200 pl-4 pr-2 py-2">
                            <img className="w-full h-full object-cover rounded-lg" src="/Catalogo/Ropa/sueter.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-1 p-2 justify-between">
                            <p>Titulo</p>
                            <p className="text-sm">$250</p>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-5 rounded-full bg-[#F5F0EA] px-2 w-fit text-sm">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <Trash2 size={20} strokeWidth={1.5} color="var(--second-color)" />
                            </div>
                        </div>
                    </div> 











                </div>



                <div className="bg-red-500 py-2 px-4 "> {/**A */}
                    <div className="grid grid-cols-[35%_65%]   bg-pink-200 justify-center items-center ">
                        <Van size={70} strokeWidth={0.4} className="w-full g-blue-200" color="var(--second-color)"/>
                        
                        <p className="bg-green-200 text-sm">Envio gratis en compras mayores a $600.00 MX</p>
                    </div>
                    

                    <div  className="grid grid-cols-[50%_50%] bg-green-500 text-sm">{/**B */}
                        <div className="flex flex-col items-start">
                            <p>Subtotal</p>
                            <p>Envío</p>
                            <p className="text-lg">Total</p>
                        </div>
                        <div className="flex flex-col  items-end">
                            <p>$790.00</p>
                            <p>$0.00</p>
                            <p className="text-lg">$790.00</p>
                        </div>
                </div>{/**B */}

                <div className="flex  justify-center">{/**c */}
                    <button className="">IR AL CARRITO</button>
                </div>{/**c */}

                <div className="flex gap-2 justify-center">{/**d */}
                    <Heart size={20} strokeWidth={1}/>
                    <button>SEGUIR COMPRANDO</button>
                </div>{/**d */}

                </div>{/**A */}


                





            </aside>
        </section>
        </main>
    )
}