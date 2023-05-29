import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import PopularMoviesList from '../../PopularMoviesList/PopularMoviesList';
import { getMoviesInfo, getPopularMovies } from '../../../api/api'
import ButtonLoadMore from '../../LoadMore/LoadMoreButton';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const homeLocation = useLocation();

  useEffect(() => {
    setIsloading(true);

    getPopularMovies(page)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error: ${response.status}`);
        }
        setTotalPages(response.data.total_pages);

        setMovies(prevState => [
          ...prevState,
          ...getMoviesInfo(response.data.results),
        ]);
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [page]);


  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <Title>Trending today</Title>

          {movies.length && (
            <>
              <PopularMoviesList movies={movies} location={homeLocation} />
              {page < totalPages && <ButtonLoadMore onLoadMore={onLoadMore} />}
            </>
          )}
        </div>
      )}
    </>
  )
};

export default HomePage;










