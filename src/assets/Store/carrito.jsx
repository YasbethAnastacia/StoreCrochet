import {
    Heart,
    Handbag,
    Trash2,
    Van,
} from "lucide-react";

export const Carrito = () =>{
    return(

        <div className="bg-[var(--color-partes)]  shadow-[0_4px_20px_var(--color-sombra)] rounded-lg" >
            <div className="flex gap-2 items-center  p-3">
                <Handbag size={18} strokeWidth={1.5} color="var(--second-color)" />
                <p className=""> Tu Carrito </p>
            </div>

            <div className=" flex flex-col  h-85 gap-y-3 overflow-y-auto [scrollbar-gutter:stable]">

                <div className="grid grid-cols-[40%_60%]  ">
                    <div className="h-25   pl-4 pr-2 py-2">
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

        </div>
    )
}