import PropTypes from 'prop-types';
const { useLocation, Link } = require('react-router-dom');

const PopularMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const location = useLocation();

        return (
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <li>
              <h3>{movie.title}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

PopularMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      w300imgUrl: PropTypes.string.isRequired,
      w500imgUrl: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PopularMoviesList;
