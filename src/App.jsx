
// React Modules
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Nav from "./components/Nav";
import './assets/index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer/Footer";


function App() {


    return (


      <BrowserRouter>

          <Nav />

          <Routes>

            <Route path="/" /* element={ <MainListaItems /> } */ />

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