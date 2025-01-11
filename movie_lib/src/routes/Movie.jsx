import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import {FaStar} from 'react-icons/fa'

import './Movie.css'

const imgMovie = import.meta.env.VITE_IMG

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
  }

    useEffect(() => {
      const urlTopMovies = `${apiTopMovies}${id}?${apiKey}`
      getMovie(urlTopMovies)
    }, [])

    const currencyFormtted = (number) => {
      const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(number)

      return formattedAmount
    }

  return (
    <div>
      {movie &&
      <div className="container-movie">
        <img src={imgMovie + movie.poster_path} alt={movie.title} />
        <h1>{movie.title}</h1>
        <div className="box-info-movie">
          <p><span><FaStar /></span> {movie.vote_average}</p>
          <p>{movie.tagline}</p>
          <p><span>
            <BsWallet2 />
          </span> Orçamento</p>
          {currencyFormtted(movie.budget)}
            <p><span>
              <BsGraphUp />
            </span> Receita</p>
          {currencyFormtted(movie.revenue)}
          <p><span>
            <BsHourglassSplit />
          </span> Duração</p>
          {movie.runtime} minutos
          <p><span>
            <BsFillFileEarmarkTextFill />
          </span> Descrição</p>
          <span className="info-movie">{movie.overview}</span>
        </div>
      </div>
      }
    </div>
  )
}

export default Movie