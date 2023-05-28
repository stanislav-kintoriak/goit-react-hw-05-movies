// import { useState } from 'react';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const movies = [{ id: 1, name: 'movie_1' }];

  //  const  [movies, setMovies] = useState([]);

  //   useEffect(

  //   )

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
