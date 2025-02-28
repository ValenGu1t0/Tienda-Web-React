
import Card from "../Card/Card";

function SeccionItems( { productos, handleUpdate } ) {

    return (

        <div className="flex flex-col justify-center items-center p-4 gap-8">

            <h2 className="text-2xl font-semibold">Novedades</h2>

            {productos.map((prod) =>   

                <Card
                key={prod.id_producto}
                id_producto={prod.id_producto}
                nombre_producto={prod.nombre_producto}
                precio_producto={prod.precio_producto}
                imagen_producto={prod.imagen_producto}
                stock_producto={prod.stock_producto}
                /* categoria_producto={prod.categoria_producto} */
                handleUpdate={handleUpdate}
                />

            )}

        </div>
    )
}

export default SeccionItems;