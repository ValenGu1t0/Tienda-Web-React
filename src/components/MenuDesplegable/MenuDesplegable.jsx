
import { useState } from "react";
import { Link } from "react-router-dom";

function MenuDesplegable() {

    // Menu Secciones desplegable
    const [abrirMenu, setAbrirMenu] = useState(false);

    // Cambiamos el estado del menu de oculto a abierto
    function toggleMenu() {  setAbrirMenu(!abrirMenu);  }

    return (

    <ul className="flex flex-row items-center">

        <li className="hidden">Novedades</li>
        <li className="font-semibold">
          <button onClick={toggleMenu}>Secciones</button>{abrirMenu && (

          // Podría ser dinámico pero prefiero pasar la ruta asi
          <ul className="absolute bg-white mt-7 border-2">
            <li className="p-4">
              <Link to="/categoria/1">Magic: The Gathering</Link>
            </li>
            <li className="p-4">
              <Link to="/categoria/2">Yu-Gi-Oh</Link>
            </li>
            <li className="p-4">
              <Link to="/categoria/3">Pokémon TCG</Link>
            </li>
            <li className="p-4">
              <Link to="/categoria/4">Accesorios</Link>
            </li>
            <li className="p-4">
              <Link to="/categoria/5">Juegos de Mesa</Link>
            </li>
          </ul>)}
          
        </li>

    </ul>

    )

}

export default MenuDesplegable;


/* Documentacion:

Hasta aca cree el menu desplegable con un estado para la <ul>,
la cual se muestra en true y oculta en false. Además, acomodé
manualmente la posición del despligue para que quede prolijo.

Por último, agregué links de react-router para después poder
ir a la pagina con URL?id_tcg=1 por ejemplo.

Si las opciones quedan asi finalmente, eliminar el css y solo 
poner el p-4 a cada <li>

*/