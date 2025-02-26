
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {

  return (

        <footer className="flex flex-row justify-evenly flex-wrap p-8 bg-gray-200">

            <div className="flex flex-col p-4 w-1/2">
                <h3 className="font-bold text-xl">Categorías</h3>
                <ul>
                    <li className="btn_footer"><Link to="/seccionTCG/1">Magic: the Gathering</Link></li>
                    <li className="btn_footer"><Link to="/seccionTCG/2">YuGiOh</Link></li>
                    <li className="btn_footer"><Link to="/seccionTCG/3">Pokemon TCG</Link></li>
                    <li className="btn_footer"><Link to="">Accesorios TCG</Link></li>
                    <li className="btn_footer"><Link to="">Juegos de Mesa</Link></li>
                </ul>
            </div>
 
            <div className="flex flex-col p-4 w-1/2">
                <h3 className="font-bold text-xl">Contacto</h3>
                <ul>
                    <li className="btn_footer"><Link to="mailto:devalen543@gmail.com"><i className="fa-regular fa-envelope"></i> Email</Link></li>
                    <li className="btn_footer"><Link to="https://wa.me/5492235314907" target="_blank"><i className="fa-brands fa-whatsapp"></i> WhatsApp</Link></li>
                    <li className="btn_footer"><Link to="#"><i className="fa-solid fa-phone"></i> Telefono</Link></li>
                    <li className="btn_footer"><Link to="#ubicacion"><i className="fa-solid fa-location-dot"></i> Dirección</Link></li>
                </ul>
            </div>

            <div className="flex flex-col p-4 w-1/2">
                <h3 className="font-bold text-xl">FAQ</h3>
                <ul>    
                    <li className="btn_footer"><Link to="#">Garantía de Calidad</Link></li>
                    <li className="btn_footer"><Link to="#">Metodos de Compra</Link></li>
                    <li className="btn_footer"><Link to="#">Envíos</Link></li>
                    <li className="btn_footer"><Link to="#">Otros</Link></li>
                </ul>
            </div>

            <div className="flex flex-col p-4 w-1/2">
                <h3 className="font-bold text-xl">Redes</h3>
                <ul>    
                    <li className="btn_footer"><Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</Link></li>
                    <li className="btn_footer"><Link to="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
                    <li className="btn_footer"><Link to="https://www.x.com/" target="_blank"><i className="fa-brands fa-twitter"></i> Twitter</Link></li>
                    <li className="btn_footer"><Link to="https://www.tiktok.com/" target="_blank"><i className="fa-brands fa-tiktok"></i> Tik Tok</Link></li>
                </ul>
            </div>

        </footer>

    )

}

export default Footer;