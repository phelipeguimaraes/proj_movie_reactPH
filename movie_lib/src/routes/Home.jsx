import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const apiTopMovies = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopMovies = async(url) => {
    const response = await fetch(url)
    const data = await response.json()
    setTopMovies(data.results)
    
  }

  useEffect(() => {
    const urlTopMovies = `${apiTopMovies}top_rated?${apiKey}`
    getTopMovies(urlTopMovies)
  }, [])

  return (
    <div className="container">
      {topMovies.length === 0 ? <p>Carregando...</p> : topMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home