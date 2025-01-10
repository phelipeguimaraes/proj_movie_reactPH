import {FaStar} from 'react-icons/fa'

const imgMovie = import.meta.env.VITE_IMG



const MovieCard = ({movie}) => {



  return (
    <div className="movieCard">
      <img src={imgMovie + movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p><span><FaStar /></span> {movie.vote_average}</p>
      <button>Detalhes</button>
    </div>
  );
}

export default MovieCard