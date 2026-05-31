const categorias = [
    {
        nombre: "AMIGURUMIS",
        icono: "/Catalogo/Iconos/amigurumi.png",
    },
    {
        nombre:"HOGAR",
        icono:"/Catalogo/Iconos/Casita.png",
    },
    {
        nombre: "ACCESORIOS",
        icono:"/Catalogo/Iconos/accesorios.png",
    },
    {
        nombre:"ROPA",
        icono:"/Catalogo/Iconos/Ropa.png",
    },
    {
        nombre:"KITS",
        icono:"/Catalogo/Iconos/kits.png",
    },
    {
        nombre:"NOVEDADES",
        icono:"/Catalogo/Iconos/Novedades.png",
    }
]


export const StoreHome = () =>{
    return(
        <main>
        {/*ROJO*/}
        <div className="bg-red-500 flex items-center gap-2 pl-5  py-3">
            <img className="w-[18px] h-[17px]" src="/Catalogo/Iconos/Casita.png" alt="" />
            <p>Home &gt; shop </p>
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
                        <nav className="bg-purple-500 text-sm text-[var(--color-white)] ">
                            <ul className="flex gap-5">

                                {categorias.map((categoria) => (
                                <li className="flex items-center gap-2 bg-[var(--second-color)] py-3 px-2 rounded-lg" key={categoria.nombre}>
                                <img className="w-[22px] h-[20px]" src={categoria.icono} />
                                <span>{categoria.nombre}</span>
                                </li>
                                ))}

                                
                                
                                
                            </ul>
                        </nav>{/*superior*/}
                    </div>

                </header>










                <div className="grid grid-cols-[30%_70%]">
                    <aside className="bg-green-500">filtros</aside>{/*filtros*/}
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