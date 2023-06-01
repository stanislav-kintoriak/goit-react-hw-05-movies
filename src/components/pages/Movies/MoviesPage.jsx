import { useState, useMemo, useEffect } from 'react';
import Notiflix from 'notiflix';
import { getMoviesByQuery, getMoviesDetails } from '../../../api/api';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import ButtonLoadMore from '../../LoadMore/LoadMoreButton';
import MoviesList from '../../PopularMoviesList/MoviesList';
import {
  Form,
  SearchInput,
  SearchBtn,
  Head,
} from './MoviesPage.styled';


const MoviesPage = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, settTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(false);

  const { query, page } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.query;
    if (!value.trim()) {
      Notiflix.Notify.failure('Sorry, incorect query. Please try again.');
      return;
    }
    if(value !== searchParams.query){
      setMovies([])
    }
    setSearchParams({ query: value, page: 1 });
  };

  useEffect(() => {
    if (!query) return;
    setIsloading(true);

    getMoviesByQuery(query, page)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error: ${response.status}`);
        }

        if (!response.data.results.length) {
          setError(true);
          console.log('Error', response.data.total_results);
          setIsloading(false);
          return console.log(
            'There is no movies with this request.'
          );
        }
        setError(false);
        settTotalPages(response.data.total_pages);
        setTotalResults(response.data.total_results);


        setMovies(prevState => [
          ...prevState,
          ...getMoviesDetails(response.data.results),
        ]);
      })
      .catch(e => console.error(e))
      .finally(() => setIsloading(false));
  }, [query, page, searchParams]);

  const onLoadMore = () => {
    const previoudPage = searchParams.get('page') ?? 1;
    const query = searchParams.get('query');
    setSearchParams({ query, page: Number(previoudPage) + 1 });
  };

  return (
    <>
    <Head>
      <h1>Searching movies</h1>
      <Form onSubmit={handleSubmit}>
        <SearchInput type="text" name="query" autoComplete="off" autoFocus />
        <SearchBtn type="submit">
Search
        </SearchBtn>
      </Form>
    </Head>
    {isLoading && <Loader />}
    {!error && query && totalResults && (
      <>
        <MoviesList movies={movies} />
        {page < totalPages && <ButtonLoadMore onLoadMore={onLoadMore} />}
      </>
    )}
    {/* {error && query && !isLoading && <PlaceholderSerch />} */}
  </>
  );
};

export default MoviesPage;
