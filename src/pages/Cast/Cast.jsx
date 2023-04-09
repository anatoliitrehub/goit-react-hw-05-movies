import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/getMovies';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const servPath = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  useEffect(() => {
    const requestPath = `/movie/${movieId}/credits`;
    getMovies(requestPath).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  // console.log(movie);

  return (
    <>
      {/* cast {movieId} */}
      <ul>
        {movie.cast &&
          movie.cast.map(el => {
            return (
              <li key={el.id}>
                {el.profile_path && (
                  <img src={servPath + el.profile_path} alt={el.title} />
                )}
                <br />
                {el.name}
                <br />
                Character: {el.character}
              </li>
            );
          })}
      </ul>
      {}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;
