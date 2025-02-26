
import './MenuDesplegable.css'

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

          <ul className="absolute bg-white mt-7 border-2">
            <li className="btn-desplegable">
              <Link to="/magic-the-gathering">Magic: The Gathering</Link>
            </li>
            <li className="btn-desplegable">
              <Link to="/magic-the-gathering">Yu-Gi-Oh</Link>
            </li>
            <li className="btn-desplegable">
              <Link to="/magic-the-gathering">Pokémon TCG</Link>
            </li>
            <li className="btn-desplegable">
              <Link to="/magic-the-gathering">Accesorios</Link>
            </li>
            <li className="btn-desplegable">
              <Link to="/magic-the-gathering">Juegos de Mesa</Link>
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