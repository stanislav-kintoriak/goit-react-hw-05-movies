import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import Cast from './Cast/Cast';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />

        <Route path="movies/:movieId" element={<Cast />} />
      </Route>
    </Routes>
  );
};

export default App;
