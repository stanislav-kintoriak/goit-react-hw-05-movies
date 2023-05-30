import { useState, useMemo, useState } from 'react';
import Notiflix from 'notiflix';


import { getMoviesByQuery, getMoviesInfo } from '../../../api/api';

import { useLocation, useSearchParams } from 'react-router-dom';

import Loader from '../../Loader/Loader';

import ButtonLoadMore from '../../LoadMore/LoadMoreButton';


const MoviesPage = () => {
  const movies = [{ id: 1, name: 'movie_1' }];

  //  const  [movies, setMovies] = useState([]);


//   useEffect(() => {}
//   ,[]
// )

  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.name}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
