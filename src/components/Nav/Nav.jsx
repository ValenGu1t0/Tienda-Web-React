
import '../../assets/index.css'
import { Link } from 'react-router-dom'
import MenuDesplegable from '../MenuDesplegable/MenuDesplegable'

function Nav() {

    return (
    
    <nav className="flex flex-row justify-between items-center relative px-6 py-4 shadow-xl">

      <MenuDesplegable />
      
      <div className="flex flex-row items-center gap-2">
        <Link to="/"><img className="max-w-12" src="../src/assets/img/d20.png" alt="logo" /></Link>
        <h2 className="hidden text-xl font-semibold sm:block">CARTONES Y MAZMORRAS</h2>
      </div>

      <ul className="flex flex-row items-center gap-6">
        <li><i className="fa-regular fa-user text-xl"></i></li>
        <li><i className="fa-solid fa-cart-shopping text-xl"></i></li>
      </ul>

    </nav>
  )
}

export default Nav;