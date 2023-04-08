import { useParams, Outlet, Link } from "react-router-dom";
// import { getMovies } from "services/getMovies";

const MovieDetails = () =>{
    const {movieId} = useParams()
    // console.log(movieId)
// const movies = getMovies(502)
// console.log(movies)
    return(
        <>
       <button>Go back</button>

      <h1>Details</h1>
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
    )
}

export default MovieDetails;