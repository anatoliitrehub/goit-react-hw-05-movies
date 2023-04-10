import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getMovies } from 'services/getMovies';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // console.log(location)
  useEffect(() => {
    getMovies('/trending/movie/day').then(data => {
      setMovies(data);
    });
  }, []);
  // console.log("home")

  return (
    <>
      <section className={s.section}>
        <h1>Trending today</h1>
        <ul>
          {movies.results &&
            movies.results.map(el => {
              const fullPath = `/movies/` + el.id;
              return (
                <>
                  <li key={el.id}>
                    <NavLink to={fullPath} state={location}>
                      {el.title}
                    </NavLink>
                  </li>
                </>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Home;
