import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import {
  
   BsGraphUp,
   BsWallet2,
   BsHourglassSplit,
   BsFillFileEarmarkTextFill

  } from 'react-icons/bs'

const apiTopMovies = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

  const {id} = useParams()

  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
    const response = await fetch(url)
    const data = await response.json()
    setMovie(data)
    console.log(movie)
  }

    useEffect(() => {
      const urlTopMovies = `${apiTopMovies}${id}?${apiKey}`
      getMovie(urlTopMovies)
    }, [])

  return (
    <div>
      {movie && <>{movie.title}</>}
    </div>
  )
}

export default Movie