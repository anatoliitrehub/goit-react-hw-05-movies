import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/getMovies';
import PropTypes from 'prop-types';
import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  //   const servPath = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  useEffect(() => {
    const requestPath = `/movie/${movieId}/reviews`;
    getMovies(requestPath).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  //   console.log(movie.results)
  return (
    <>
      <section className={s.section}>
        {movie.results && !movie.results.length && (
          <p>We don`t have any reviews to this movie</p>
        )}
        <ul>
          {movie.results &&
            movie.results.map(el => {
              return (
                <>
                  <li key={el.id}>
                    <h3>{el.author}</h3>
                    {/* {el.author_details.avatar_path&&<img src={el.author_details.avatar_path.split('').slice(1).join('')} alt={el.author} />} */}
                    <p className="content">{el.content}</p>
                    <p className="created">
                      Date: {el.created_at.slice(0, 10)}
                    </p>
                  </li>
                </>
              );
            })}
        </ul>
      </section>
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.number,
};

export default Reviews;
