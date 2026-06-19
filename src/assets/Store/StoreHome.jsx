import {
    House,
} from "lucide-react";
import{Header} from "./header";
import{Filtros} from "./filtros";
import{Menu} from "./menu";
import{Carrito} from "./carrito";



export const StoreHome = () =>{
    
    return(
        <main className="bg-[#F8F5F2] min-h-screen px-5 py-3">
        
        
        <div className=" flex items-center gap-2 pl-5  py-2 text-sm">
            <House className="w-[13px] h-[14px]" />
            <p className="">Home &gt; shop </p>
        </div>
        {/*<section className="grid grid-cols-[80%_20%]  "> */}
        <section className="grid grid-cols-1  lg:grid-cols-[1fr_320px] gap-6">
            
            <section className="flex flex-col gap-5">

                <Header/>

                {/*<section className="grid grid-cols-[20%_80%]  "> */}
                <div className=" grid grid-cols-1 md:grid-cols-[290px_1fr] gap-6"
>
                    <Filtros/>

                    <Menu/>
                </div>


            </section>


            <aside className=" pt-12 pl-8">
                
                <Carrito />

            </aside>
        </section>
        </main>
    )
}




















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
