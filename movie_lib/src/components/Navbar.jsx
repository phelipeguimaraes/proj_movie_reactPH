import {FiSearch} from 'react-icons/fi'
import {BiCameraMovie} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>
          <Link to="/">
            Movies Library <BiCameraMovie />
          </Link>
        </h1>
        <div className="box-search-movie">
          <form>
            <input type="text" placeholder="Buscar filme" />
            <button type="submit">
                <FiSearch />
            </button>
          </form>
        </div>
      </nav>
  )
}

export default Navbar