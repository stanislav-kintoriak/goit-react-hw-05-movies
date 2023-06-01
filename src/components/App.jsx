import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));

const HomePage = lazy(() => import('./pages/Home/HomePage'));

const MoviesPage = lazy(() => import('./pages/Movies/MoviesPage'));

const MovieInfo = lazy(() => import('./pages/MovieInfo/MovieInfo'));

const Cast = lazy(() => import('./Cast/Cast'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
    </Suspense>
  );
};

export default App;
