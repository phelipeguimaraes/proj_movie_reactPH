import { useEffect, useState } from "react"

import {useSearchParams} from 'react-router-dom'

import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../routes/MovieGrid.css'

const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get('q')

  const getSearchedMovies = async(url) => {
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results)
    }
  
    useEffect(() => {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
      getSearchedMovies(searchWithQueryURL)
    }, [query])

  return (
    <>
    <h2 id="titleSearch">Resultados para: <span>{query}</span></h2>
    <div className="container">
    {movies.length === 0 ? <p>Carregando...</p> : movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
  </>
  )
}

export default Search