// import { useEffect } from 'react';

import { useParams, Outlet, Link } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();

//   useEffect(() => {}, []);

  return (
    <div>
      <h2>MovieDetails: {movieId}</h2>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
