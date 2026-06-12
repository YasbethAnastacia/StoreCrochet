import {
    House,
} from "lucide-react";
import{Header} from "./header";
import{Filtros} from "./filtros";
import{Menu} from "./menu";
import{Carrito} from "./carrito";



export const StoreHome = () =>{
    
    return(
        <main className="px-5 py-3">
        
        
        <div className=" flex items-center gap-2 pl-5 bg-green-500  py-2 text-sm">
            <House className="w-[13px] h-[14px]" />
            <p className="">Home &gt; shop </p>
        </div>
        
        <section className="grid grid-cols-[80%_20%] bg-red-500 ">
            
            <section className="flex flex-col gap-5">

                <Header/>

                <div className="grid grid-cols-[20%_80%]   bg-red-200">

                    <Filtros/>

                    <Menu/>
                </div>


            </section>


            <aside className="bg-red-200 pt-12 pl-8">
                
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
