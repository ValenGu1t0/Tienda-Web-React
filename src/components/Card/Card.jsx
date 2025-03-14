import { Link } from "react-router-dom";

/* Handle update lo usare cuando haga las solicitudes https */
function Card( { id_producto, nombre_producto, precio_producto, imagen_producto, stock_producto, /* handleUpdate */ } ) {

  // se me ocurre que va a necesitar un useState para Stock con un metodo HTTP en cada click carrito

  /* id_producto va a ser usado con el link de "comprar" y debo acompañarlo con router y Link */
  /* categoria_producto quedo afuera */

    return (

        <div className="flex flex-col justify-center items-center w-full p-6 gap-6 rounded-xl shadow-xl border">
    
          <img src={imagen_producto} alt={nombre_producto} />

          <h3 className="text-center text-md font-bold">{nombre_producto}</h3>

          <div className="flex flex-row justify-between w-full px-1">
            <p className="font-semibold text-lg">${precio_producto}</p>
            <p className="font-semibold text-lg">Stock: {stock_producto}</p>
          </div>
          
          <div className="flex flex-row justify-between w-full ">
            <button className="border-2 border-black rounded-xl px-6 py-2 hover:bg-amber-500 transition-all duration-300"
            /* Logica para agregar el item al carrito aca */ >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            
            <button className="bg-orange-400 border-2 border-black rounded rounded-xl px-4 py-2 font-bold hover:bg-white transition-all duration-300">
              <Link to={`/producto/${id_producto}`}>Comprar</Link>
            </button>
          </div>

        </div>

    )

}


export default Card;