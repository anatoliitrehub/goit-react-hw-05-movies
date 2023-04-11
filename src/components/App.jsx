import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
// import {StyledLink} from './App.styled';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from 'pages/Reviews/Reviews';
// import Cast from 'pages/Cast/Cast';
import styled from 'styled-components';
import s from './App.module.css';
import { lazy, Suspense } from 'react';

const StyledLink = styled(NavLink)`
  color: grey;
  text-decoration: none;
  font-weight: 700;

  &.active {
    color: #FF0000;
  }`;

const SharedLayout = () => {
  return (
    <>
      <header></header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <footer></footer>
    </>
  );
};

export const App = () => {
  // const Home = lazy(() => import('pages/Home/Home'));
  // const Movies = lazy(() => import('pages/Movies/Movies'));
  const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
  // const MovieInfo = lazy(() => import('pages/MovieDetails/MovieInfo'));
  const Reviews = lazy(() => import('pages/Reviews/Reviews'));
  const Cast = lazy(() => import('pages/Cast/Cast'));

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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {/* <Route index element={<MovieInfo />}/> */}
            {/* <Route path="cast"element={<p>CAST</p>}
            />
            <Route
              path="reviews"
              element={<p>REVIEWS</p>}
            /> */}
            <Route
              path="cast"
              element={
                <Suspense fallback={<h3>Loading...</h3>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<h3>Loading...</h3>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
