import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, useNavigate } from 'react-router-dom';
import { getMovies } from 'services/getMovies';
import s from './MovieDetails.module.css';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const servPath = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  // console.log(movieId)
  // const movies = getMovies(502)
  // console.log(movies)
  // const requestPath = `/movie/`+movieId;

  useEffect(() => {
    const requestPath = `/movie/` + movieId;

    getMovies(requestPath).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  // console.log(movie);

  return (
    <>
      <section className={s.section}>
        <button className={s.buttonBack} onClick={() => navigate(-1)}>
          Go back
        </button>
        <div className={s.infoWrapper}>
          <div className={s.imageWrap}>
            {movie.poster_path && (
              <img
                className={s.image}
                src={servPath + movie.poster_path}
                alt={movie.title}
              />
            )}
          </div>

          <div className={s.infoMovie}>
            <h1>{movie.title}</h1>
            <p>User score: {Math.floor(10 * movie.vote_average)}%</p>
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
            <h3>Genres:</h3>
            <ul className={s.genresList}>
              {movie.genres &&
                movie.genres.map(el => {
                  return (
                    <li className={s.genresItem} key={el.id}>
                      {el.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
      {/* <p>ID: {movieId}</p> */}
      <section className={s.section}>
        <p>Addition information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieDetails;
