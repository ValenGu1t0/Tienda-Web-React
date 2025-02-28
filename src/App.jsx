
import './assets/index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import fetchData from './assets/fetchData';

// React Modules
import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Componentes Propios
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import Informacion from "./components/Informacion/Informacion";
import PaginaCategoria from './components/PaginaCategoria/PaginaCategoria';
import SeccionItems from './components/SeccionItems/SeccionItems';


function App() {

    // Productos va a tener la lista de items en todo momento
    const [productos, setProductos] = useState([]);

    // Función que actualiza la lista de items
    const handleUpdate = useCallback(() => {

        fetchData()
        .then((res) => {  setProductos(res);  })

    }, [])

    useEffect(() => {

        handleUpdate();

    }, [handleUpdate])

    return (

      <BrowserRouter>

        <Nav />

        <Routes>

          {/* Página Principal */}
          <Route path="/" element={ 
            <>
              <Inicio />
              <Informacion />
              {/* Aca seria tener un componente <Novedades /> que llame a <SeccionItems productos={productos} handleUpdate={handleUpdate} />  */}
              <SeccionItems productos={productos} handleUpdate={handleUpdate} />
            </> 
          }/>

          {/* Página Plantila para los distintos TCG */}
          <Route path="/categoria/:categoria_producto" element={ <PaginaCategoria productos={productos} handleUpdate={handleUpdate} /> } />

          {/* Página Plantila cada Producto */}
          {/* <Route path="/categoria/:id_producto" element={ <PaginaProducto productos={productos} handleUpdate={handleUpdate} /> } /> */}

        </Routes>

        <Footer />

      </BrowserRouter>

    );
}

export default App;




/* 
  id_tcg = 1 = MAGIC (Normalizado)
  id_tcg = 2 = YUGI (Normalizado) 
  id_tcg = 3 = POKEMON (Normalizado) 
  id_tcg = 4 = Accesorios
  id_tcg = 5 = Juegos de Mesa
  Falta accesorios y juegos de mesa

  {          
  "id_producto": 0,                                 
  "nombre_producto": "Magic: the Gathering - Lord of the Rings - Draft Booster Box",
  "precio_producto": "450.000",    
  "imagen_producto": "img/prod/lotr.webp",     
  "stock_producto": 6,
  "id_tcg": 1
  },
  */ 