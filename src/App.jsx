
import './assets/index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

// React Modules
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Componentes Propios
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import Informacion from "./components/Informacion/Informacion";
import ListaItems from './components/ListaItems/ListaItems';


function App() {

    return (

      <BrowserRouter>

        <Nav />

        <Routes>


          <Route path="/" element={ 
            <>
              <Inicio />
              <Informacion />
              <ListaItems />
            </> 
          }/>


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