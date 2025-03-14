
import { useParams } from "react-router-dom";

function PaginaProducto( { productos, /* handleUpdate */ }) {

    const { id_producto } = useParams();

    const itemFiltrado = productos.find(prod => Number(prod.id_producto) === Number(id_producto));

    return (

        <>{itemFiltrado ? (
                
                <div className="flex flex-col p-8 justify-center items-center gap-4">

                    <h2 className="text-2xl font-bold text-center">{itemFiltrado.nombre_producto}</h2>

                    <img className="border-b-4 border-orange-300 shadow-xl rounded-xl"
                    src={itemFiltrado.imagen_producto} alt={itemFiltrado.nombre_producto} />

                    <div className="flex flex-row w-full justify-between">
                        <p className="text-2xl font-semibold p-4 border-b-4 border-orange-400">${itemFiltrado.precio_producto}</p>
                        <p className="text-2xl font-medium p-4 border-b-4 border-orange-400">Stock: {itemFiltrado.stock_producto}</p>
                    </div>
        

                    {/* Ambos botones deben tener la logica de agregar al carrito aca */}
                    <div className="flex flex-row w-full justify-between items-center gap-2 py-4">
                        
                        <div className="flex flex-row items-center gap-4">
                            <input type="number" min="1" max={itemFiltrado.stock_producto} className="p-4 border border-black rounded w-24 text-xl" />
                            <i className="fa-solid fa-cart-shopping text-3xl"></i>
                        </div>
                        
                        
                        <button className="bg-orange-500 w-1/3 border-2 border-black rounded rounded-xl px-4 py-4 font-bold hover:bg-white transition-all duration-300">
                            Comprar
                        </button>
                    </div>
  
                </div>

            ) : ( <p className="text-xl font-semibold text-orange-400 text-center">Producto no encontrado</p> ) 
        }</>
    )
}

export default PaginaProducto;