import {FaStar} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const imgMovie = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {

  const navigate = useNavigate()

  const navigateMovie = () => {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <div className="movieCard">
      <img src={imgMovie + movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p><span><FaStar /></span> {movie.vote_average}</p>
      <button onClick={navigateMovie}>Detalhes</button>
    </div>
  );
}

export default MovieCard