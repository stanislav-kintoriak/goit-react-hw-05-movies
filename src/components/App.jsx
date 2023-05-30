import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../../Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));

const HomePage = lazy(() => import('./pages/Home/HomePage'));

const MoviesPage = lazy(() => import('./pages/Movies/MoviesPage'));

const MovieDetails = lazy(() => import('./pages/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
