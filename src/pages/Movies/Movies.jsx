import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { getMovies } from 'services/getMovies';
import s from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [wordSearch, setWordSearch] = useState('');

  const getSearch = ev => {
    ev.preventDefault();
    const requestPath = `/search/movie`;

    getMovies(requestPath, wordSearch.trim()).then(data => {
      setMovies(data);
    });

    // console.log(movies);
  };
  return (
    <>
      <section className={s.section}>
        <form onSubmit={ev => getSearch(ev)}>
          <input
            type="text"
            value={wordSearch}
            onChange={ev => setWordSearch(ev.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {movies.results && movies.results.length !== 0 && (
          <h1>Search results:</h1>
        )}
        {movies.results && movies.results.length === 0 && (
          <h1>There are no results</h1>
        )}
        <ul>
          {movies.results &&
            movies.results.map(el => {
              const fullPath = `/movies/` + el.id;
              return (
                <>
                  <li key={el.id}>
                    <NavLink to={fullPath}>{el.title}</NavLink>
                  </li>
                </>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Movies;
