import {FiSearch} from 'react-icons/fi'
import {BiCameraMovie} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav className="navbar">
        <h1>
          <Link to="/">
            Movies Library <BiCameraMovie />
          </Link>
        </h1>
        <div className="box-search-movie">
          <form onSubmit={handleSubmit}>
            <input
             type="text" 
             placeholder="Buscar filme" 
             onChange={(e) => setSearch(e.target.value)} 
             value={search}
             />
            <button type="submit">
                <FiSearch />
            </button>
          </form>
        </div>
      </nav>
  )
}

export default Navbar