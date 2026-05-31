import {
    House,
    ShoppingBag,
    Shirt,
    Package,
    Star,
    SlidersHorizontal,
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
 */}

const CategoriaStyle = {
    size:18,
    strokeWidth:1.5,
    color:"#0f0f0f",

}

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
        icono:Package,
    },
    {
        nombre:"NOVEDADES",
        icono:Star,
    }
]


export const StoreHome = () =>{
    return(
        <main>
        {/*ROJO*/}
        <div className=" flex items-center gap-2 pl-5  py-2 text-sm">
            <img className="w-[13px] h-[12px]" src="/Catalogo/Iconos/Casita.png" alt="" />
            <p className="">Home &gt; shop </p>
        </div>
        <section className="grid grid-cols-[80%_20%]">
            {/*70%*/}
            <section>

                <header>
                    
                    {/*superior*/}
                    <div className="grid grid-cols-[35%_65%]">
                        <div className="bg-pink-500">
                            <h2>Tienda</h2>
                            <p>Hecho a mano con amor, especialmente para ti.</p>
                        </div>
                        <nav className="bg-purple-500 text-sm flex justify-end ">
                            <ul className=" flex items-end gap-5 bg-red-500  ">

                                {categorias.map((categoria) => {
                                    const Icono = categoria.icono;

                                    return(
                                        <li className="flex gap-2 
                                        bg-white rounded-2xl p-2" key={categoria.nombre}>
                                        <Icono {...CategoriaStyle}/>
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
                    <aside className="bg-green-500">
                        <div className="flex">
                            <p>Flitros</p>
                            <SlidersHorizontal className="ml-auto" size={20} />
                        </div>
                        <div>{/*categorias*/}
                            <p>CATEGORIA</p>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="h-[15px] w-[15px] border border-black border-2 rounded-full"/>
                                    <p>Todos</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-[15px] w-[15px] border border-black border-2 rounded-full"/>
                                    <p>Todos</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-[15px] w-[15px] border border-black border-2 rounded-full"/>
                                    <p>Todos</p>
                                </div>
                            </div>
                        </div>{/*categorias*/}


                        <div className="flex flex-col">{/*colores*/}
                                <p>COLORES</p>
                                <div className="flex">
                                    <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                    <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                    <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                    <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                    <div className="h-[25px] w-[25px] rounded-full bg-red-500"/>
                                </div>
                        </div>{/*colores*/}
                    </aside>







                    <section className="bg-pink-200">categoria</section>{/*productos*/}
                </div>


            </section>














            {/*TU CARRITO */}
            <aside className="bg-red-200">carrito

            </aside>
        </section>
        </main>
    )
}