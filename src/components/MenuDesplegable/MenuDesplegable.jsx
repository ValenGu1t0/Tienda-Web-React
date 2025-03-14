
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function MenuDesplegable() {

    // Menu Desplegable
    const [isOpen, setIsOpen] = useState(false);

    // Click afuera del Menu
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {

      const handleClickOutside = (event) => {

        if (
          menuRef.current &&
          !menuRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (

      <>
        <button className="p-2 text-black cursor-pointer hover:text-orange-500 transition duration-300"
        onClick={ () => {setIsOpen(!isOpen)} } ref={buttonRef}>
          <i className="fas fa-bars text-2xl"></i>
        </button>

        <ul className={`absolute bg-white top-full left-0 w-full shadow-md transition-all duration-300
        ${isOpen ? "flex flex-col" : "hidden" }` } ref={menuRef}>
        
          <li className="font-medium hover:bg-orange-400 hover:text-white text-center transition duration-200">
            <Link to="/" className="p-4 block w-full h-full"
            onClick={ () => {setIsOpen(false)}}>     
              Inicio
            </Link>
          </li>
            
          <li className="font-medium hover:bg-orange-400 hover:text-white text-center transition duration-200">
            <Link to="/nosotros" className="p-4 block w-full h-full"
            onClick={ () => {setIsOpen(false)}}>    
              Nosotros
            </Link>
          </li>

          {/* Aca deberia hacer otro desplegable y mostrar todos los TCG */}
          <li className="font-medium hover:bg-orange-400 hover:text-white text-center transition duration-200" >
            <Link to="/categoria" className="p-4 block w-full h-full"
            onClick={ () => {setIsOpen(false)}}>      
              Secciones
            </Link>
          </li>
          
        </ul>
      </>
    );
}

export default MenuDesplegable;