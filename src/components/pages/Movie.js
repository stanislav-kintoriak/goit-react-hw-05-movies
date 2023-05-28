import { useState, useEffect } from 'react';

const MoviesPage = () => {
  [movies, setMovies] = useState([{ id: 1, name: movie_1 }]);

  useEffect(

  )

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
