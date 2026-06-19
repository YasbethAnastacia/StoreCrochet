import {
    Heart,
    Handbag,
    Trash2,
    Van,
} from "lucide-react";

export const Carrito = () => {

    return(

        <div className="bg-[var(--color-partes)] shadow-[0_4px_20px_var(--color-sombra)] rounded-xl">

            <div className="flex gap-2 items-center p-4 border-b border-gray-100">
                <Handbag size={18} strokeWidth={1.5} color="var(--second-color)" />
                <p className="text-xl font-medium">Tu Carrito</p>
            </div>

            <div className="flex flex-col h-80 gap-y-4 overflow-y-auto [scrollbar-gutter:stable] py-4">

                <div className="flex gap-3 px-4">

                    <div className="h-20 w-20 flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-lg" src="/Catalogo/Ropa/sueter.png" alt="" />
                    </div>

                    <div className="flex flex-col flex-1 justify-between">

                        <div>
                            <p className="font-medium text-sm line-clamp-2">Suéter tejido artesanal edición limitada color rosa pastel</p>
                            <p className="text-sm text-[var(--second-color)]">$250</p>
                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-3 rounded-full bg-[#F5F0EA] border border-gray-200 px-3 py-1 text-sm">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>

                            <Trash2 size={18} strokeWidth={1.5} color="var(--second-color)" />

                        </div>

                    </div>

                </div>

            </div>

            <div className="border-t border-gray-100 px-4 py-4">

                <div className="flex items-center gap-3 bg-[#FBF7F2] border border-[#F1E5D8] rounded-xl p-3">

                    <Van size={32} strokeWidth={1.3} color="var(--second-color)" />

                    <p className="text-xs leading-4">
                        Envío gratis en compras mayores a $600.00 MX
                    </p>

                </div>

                <div className="grid grid-cols-2 text-sm py-5 gap-y-2">

                    <div className="flex flex-col gap-2 ">
                        
                        <p className="text-gray-500">Subtotal</p>
                        <p className="text-gray-500"> Envío</p>
                        
                        <p className="font-semibold text-lg">Total</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                        <p className="text-gray-500">$790.00</p>
                        <p className="text-gray-500">$0.00</p>
                        <p className="font-semibold text-xl text-[var(--second-color)]">$790.00</p>
                    </div>

                </div>

                <button className="w-full bg-[var(--second-color)] text-white rounded-lg py-3 text-sm font-medium transition hover:opacity-90">
                    IR AL CARRITO
                </button>

                <button className="w-full flex items-center justify-center gap-2 border border-[var(--second-color)] text-[var(--second-color)] rounded-lg py-3 text-sm font-medium mt-3 transition hover:bg-[var(--second-color)] hover:text-white">
                    <Heart size={18} strokeWidth={1.5}/>
                    <span>SEGUIR COMPRANDO</span>
                </button>

            </div>

        </div>

    )
}