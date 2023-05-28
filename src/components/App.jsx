import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
