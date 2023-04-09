import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from 'pages/Reviews/Reviews';
// import Cast from 'pages/Cast/Cast';
import styled from 'styled-components';
import s from './App.module.css';
import { lazy, Suspense } from 'react';

export const App = () => {
  // const Home = lazy(() => import('pages/Home/Home'));
  // const Movies = lazy(() => import('pages/Movies/Movies'));
  const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
  const Reviews = lazy(() => import('pages/Reviews/Reviews'));
  const Cast = lazy(() => import('pages/Cast/Cast'));
  const StyledLink = styled(NavLink)`
    color: grey;
    text-decoration: none;
    font-weight: 700;

    &.active {
      color: red;
    }
  `;
  return (
    <div
      style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <nav className={s.navigate}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies /> } />

          <Route
            path="/movies/:movieId"
            element={
              // <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
              // </Suspense>
            }
          >
            <Route
              path="cast"
              element={<Cast />}
            />
            <Route
              path="reviews"
              element={<Reviews />}
            />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
