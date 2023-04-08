import { useEffect,useState } from 'react';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { getMovies } from "services/getMovies";

const MovieDetails = () => {
  const [movie,setMovie] = useState([])
  const { movieId } = useParams();
  const navigate = useNavigate();
  // console.log(movieId)
  // const movies = getMovies(502)
  // console.log(movies)
  // const requestPath = `/movie/`+movieId;
  useEffect(()=>{
    const requestPath = `/movie/`+movieId;

    getMovies(requestPath).then(data=>{setMovie(data)})
},[])

console.log(movie)
  
  return (
    <>
      <button onClick={() => navigate('/')}>Go back</button>
{movie.poster_path&&<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face`+movie.poster_path} alt={movie.title} />}


      <h1>{movie.title}</h1>
      <p>User score: {100*movie.popularity}%</p>
<h2>Overview:</h2>
<p>{movie.overview}</p>
<h3>Genres:</h3>
<ul>
{movie.genres&&movie.genres.map(el=>{return(
  <li key={el.id}>{el.name}</li>
)}
)}
</ul>

      <p>ID: {movieId}</p>
      <p>Addition information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
