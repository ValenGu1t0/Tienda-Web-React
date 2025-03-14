
import { useParams } from "react-router-dom";
import SeccionItems from "../SeccionItems/SeccionItems";

// Componente que filtra por categoría y muestra los prod relacionados a la misma
function PaginaCategoria({ productos, handleUpdate }) {

    // Obtiene el ID de la categoría desde la URL que lo invoca
    const { categoria_producto } = useParams(); 

    // Filtramos los productos que coincidan con la categoría
    const productosFiltrados = productos.filter(prod => prod.categoria_producto == categoria_producto);

    return (

        <div className="flex flex-col justify-center items-center mt-4 p-4 gap-8">

            {/* Ver si puedo poner el logo en vez del h2 */}
            {/* Podria ser algo tipo if (categoria_producto === 1 then mtg.png) */}

            <h2 className="text-2xl font-semibold">Categoría {categoria_producto}</h2>
            
            { productosFiltrados.length > 0 &&

                <SeccionItems productos={productosFiltrados} handleUpdate={handleUpdate} />

            }

        </div>

    );
}

export default PaginaCategoria;
