
import '../../assets/index.css'
import {Link} from 'react-router-dom'
import MenuDesplegable from '../MenuDesplegable/MenuDesplegable'

function Nav() {

    return (
    
    <nav className="flex flex-row justify-between px-6 py-4 shadow-xl">

      <MenuDesplegable />

      <div className="flex flex-row items-center">
        <h2 className="hidden">Cartones y Mazmorras</h2>
        <Link to="/"><img className="max-w-12" src="../src/assets/img/d20.png" alt="logo" /></Link>
      </div>


      <ul className="flex flex-row items-center gap-8">
        <li><i className="fa-regular fa-user"></i></li>
        <li><i className="fa-solid fa-cart-shopping"></i></li>
      </ul>

    </nav>
  )
}

export default Nav;